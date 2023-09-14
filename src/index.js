//Original C++ code by: maya_biology on the "Hot Start" Discord. https://discord.com/channels/397379810067742721/745783644936994887/1150846297797042267
//Modified for Node.js by auroraisluna (https://github.com/auroraisluna/)
//Values provided by Biology2394 (https://forums.flightsimulator.com/t/replace-the-atmosphere-parameters-with-more-accurate-ones-from-arpc/607603)

const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const inputFilePath = 'FlightSimulator.exe';
const outputFilePath = 'FlightSimulator_Modified.exe';
const fileOffset = 121787352;

async function main() { //Hi java

    try {

        console.log(' ')
        console.log('   __  __  _____ ______ _____         _______ __  __  ____   _____ _____  _    _ ______ _____  ______   ______ _______   __')
        console.log('  |  \\/  |/ ____|  ____/ ____|     /\\|__   __|  \\/  |/ __ \\ / ____|  __ \\| |  | |  ____|  __ \\|  ____| |  ____|_   _\\ \\ / /')
        console.log('  | \\  / | (___ | |__ | (___      /  \\  | |  | \\  / | |  | | (___ | |__) | |__| | |__  | |__) | |__    | |__    | |  \\ V / ')
        console.log('  | |\\/| |\\___ \\|  __| \\___ \\    / /\\ \\ | |  | |\\/| | |  | |\\___ \\|  ___/|  __  |  __| |  _  /|  __|   |  __|   | |   > <  ')
        console.log('  | |  | |____) | |    ____) |  / ____ \\| |  | |  | | |__| |____) | |    | |  | | |____| | \\ \\| |____  | |     _| |_ / . \\ ')
        console.log('  |_|  |_|_____/|_|   |_____/  /_/    \\_\\_|  |_|  |_|\\____/|_____/|_|    |_|  |_|______|_|  \\_\\______| |_|    |_____/_/ \\_\\')
        console.log('                                                                                                                        ')                                                                              
        console.log('  MSFS Fix Atmosphere Parameters tool')
        console.log('  https://github.com/auroraisluna/msfs-fix-atmosphere-parameters')
        console.log(' ')
        console.log(' ')
        console.log(`  Reading ${inputFilePath}...`)
        
        //Read the FlightSimulator.exe file into a buffer
        const inputBuffer = await readFileAsync(inputFilePath);

        //Extract the data at the specified offset
        const floatValue1 = inputBuffer.readFloatLE(fileOffset);
        const floatValue2 = inputBuffer.readFloatLE(fileOffset + 4);
        const floatValue3 = inputBuffer.readFloatLE(fileOffset + 8);

        console.log('------------------------------------------------')

        //Display the extracted data (and hex offsets) for verification
        console.log('  Original values:');
        console.log(`    ${floatValue1} (${fileOffset})`);
        console.log(`    ${floatValue2} (${fileOffset + 4})`);
        console.log(`    ${floatValue3} (${fileOffset + 8})`);

        //Modify the values
        inputBuffer.writeFloatLE(1.25 * 2.29 / 1000.0, fileOffset);
        inputBuffer.writeFloatLE(1.25 * 1.54 / 1000.0, fileOffset + 4);
        inputBuffer.writeFloatLE(0.0, fileOffset + 8);

        //Write the modified data to the output
        await writeFileAsync(outputFilePath, inputBuffer);

        console.log('------------------------------------------------')

        console.log(`  ✅ File modified. Output file: ${outputFilePath}.`);
        console.log('  Replace the original FlightSimulator.exe on your sim installation with this file and run the game. Refer to the README.md on the GitHub if you are just running this blindly.');
        console.log('  https://github.com/auroraisluna/msfs-fix-atmosphere-parameters')
        console.log()
        console.log('  Press CTRL+C (or close this window) to exit...');

        //Hold the process open until the user exits
        process.stdin.resume();

    } catch (error) {

        //Check if error is related to file not existing
        if (error.code === 'ENOENT') {
            console.log(' ')
            console.error(`  ⚠️ Error: ${inputFilePath} does not exist. Read the README.md on GitHub if you are just running this blindly.`);
            console.log('  https://github.com/auroraisluna/msfs-fix-atmosphere-parameters')
            //Hold the process open until the user exits
            process.stdin.resume();
        };

        console.error('  Error:', error);
        //Hold the process open until the user exits
        process.stdin.resume();
    }

}

main();
