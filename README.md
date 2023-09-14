# msfs-fix-atmosphere-parameters

**⚠️ STEAM VERSION ONLY**

This tool modifies the atmosphere parameters on the FlightSimulator.exe to improve visuals. 

This tool is based on the coefficients found here: https://forums.flightsimulator.com/t/replace-the-atmosphere-parameters-with-more-accurate-ones-from-arpc/607603

The JavaScript code is based on the C++ work of maya_biology on the "Hot Start" Discord. [Link to C++](https://discord.com/channels/397379810067742721/745783644936994887/1150846297797042267)

## How to use

1. Download the latest release from the [releases page](https://github.com/auroraisluna/msfs-fix-atmosphere-parameters/releases/latest)
Make sure you download the `fix-msfs-atmosphere.exe` file not the source code!
2. Extract the `fix-msfs-atmosphere.exe` file in a folder
3. Copy the FlightSimulator.exe. You can find your FlightSimulator.exe: Open Steam, right click on Microsoft Flight Simulator, click on Properties, click on Local Files, click on Browse Local Files. 
4. Paste the FlightSimulator.exe in the folder you created in step 2
5. Run `fix-msfs-atmosphere.exe`
6. Wait for the process to finish
7. Copy the newly made FlightSimulator_Modified.exe to the folder you found in step 3 and rename it to FlightSimulator.exe
8. Enjoy!

## How to revert

You have two options: 

Option A: Steam Integrity Check (not recommended for standard installations - may delete your community folder in some cases if you do not use a seperate community folder and use addon linker for example)
1. Open Steam, right click on Microsoft Flight Simulator, click on Properties, click on Local Files, click on Verify Integrity of Game Files
2. Wait for the process to finish

Option B: Copy the original FlightSimulator.exe
Since you have copied the original FlightSimulator.exe in step 3 of the [How to use](#how-to-use) section, you can just copy it back to the folder you found in step 3 and rename it to FlightSimulator.exe

## Errors

If you get an error, please open an issue and attach a screenshot of the error message.

Common errors:
- "Error: FlightSimulator.exe does not exist.": Make sure you have copied the FlightSimulator.exe as described in the [How to use](#how-to-use) section.

## Need help?

Join my Discord: https://discord.gg/5MeXEJzubC or open an issue.

## Development

### Requirements

- Node.js v16 or higher
- npm 

### Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm run build` to build the executable

## Contributing

Pull requests & issues are welcome.