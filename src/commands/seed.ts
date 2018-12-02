import * as commander from 'commander'
import chalk from 'chalk';
import * as path from 'path';
import {
    loadConnection, loadEntityFactories, loadSeeds, runSeed, setConnection
} from 'typeorm-seeding';

commander
    .option('--factories <path>', 'add filepath for your factories')
    .option('-L, --logging', 'enable sql query logging')
    .option('--seeds <path>', 'add filepath for your seeds')
    .option('--run <seeds>', 'run specific seeds (file names without extension)', (val) => val.split(','))
    .option('--config <file>', 'path to your ormconfig.json file (must be a json)')
    .parse(process.argv);

const factoryPath = (commander.factories) ? commander.factories : 'src/database/factories';
const seedPath = (commander.seeds) ? commander.seeds : 'src/database/seeds';

const listOfSeeds = (commander.run)
    ? commander.run.map(l => l.trim()).filter(l => l.length > 0)
    : [];

const run = async () => {
    const log = console.log;
    let factoryFiles;
    let seedFiles;
    try {
        factoryFiles = await loadEntityFactories(factoryPath);
        seedFiles = await loadSeeds(seedPath);
        log(seedFiles);
    } catch (error) {
        return handleError(error);
    }

    if (listOfSeeds.length > 0) {
        seedFiles = seedFiles.filter(sf => listOfSeeds.indexOf(path.basename(sf).replace('.ts', '')) >= 0);
    }

    log(chalk.bold('seeds'));
    log('🔎 ', chalk.gray.underline(`found:`),
        chalk.blue.bold(`${factoryFiles.length} factories`, chalk.gray('&'), chalk.blue.bold(`${seedFiles.length} seeds`)));

    try {
        const connection = await loadConnection();
        setConnection(connection);
    } catch (error) {
        return handleError(error);
    }

    for (const seedFile of seedFiles) {
        try {
            let className = seedFile.split('/')[seedFile.split('/').length - 1];
            className = className.replace('.ts', '').replace('.js', '');
            className = className.split('-')[className.split('-').length - 1];
            log('\n' + chalk.gray.underline(`executing seed:  `), chalk.green.bold(`${className}`));
            const seedFileObject: any = require(seedFile);
            await runSeed(seedFileObject[className]);
        } catch (error) {
            console.error('Could not run seed ', error);
            process.exit(1);
        }
    }

    log('\n👍 ', chalk.gray.underline(`finished seeding`));
    process.exit(0);

};

const handleError = (error) => {
    console.log(error);
    process.exit(1);
};

run();
