const fs = require("fs")
const {createDirectory, copyAssets} = require("./createStructures");

function createManifest(name,version,description, manifestVersion, author, locale, license){
    // creating a simple manifest file
    createManifestFile(name, version, description, manifestVersion, author, locale, license)
    console.log(`Name: ${name}, Version: ${version}, Desc:${description}, ManifestVersion: ${manifestVersion}, Author: ${author}, Default_locale: ${locale}, License: ${license}`)
    return 0;
}

function createManifestFile(name, version, description, manifestVersion, author, locale, license) {
    //* 1. Create a folder with the project name
    try {
        const status = createDirectory(name);
        if(status === 1) {
            throw new Error
        }
    } catch (err) {
        console.log(`Not able to create a directory with name ${name}`)
    }

    //* 2. Create Basic manifest.json file
    const content = {
        "name": name,
        "version": version,
        "manifest_version": manifestVersion,
        "description": description,
        "author": author,
        "default_locale": locale,
        // "license": license,
        "icons": {
            "16": "assets/icons/shark_16x16.png",
            "24": "assets/icons/shark_24x24.png",
            "32": "assets/icons/shark_32x32.png",
            "64": "assets/icons/shark_64x64.png",
            "128": "assets/icons/shark_128x128.png",
            "256": "assets/icons/shark_256x256.png",
            "512": "assets/icons/shark_512x512.png",
        },
        "action": {
            "default_icon": {
                "16": "assets/icons/shark_16x16.png",
                "24": "assets/icons/shark_24x24.png",
                "32": "assets/icons/shark_32x32.png",
                "64": "assets/icons/shark_64x64.png",
                "128": "assets/icons/shark_128x128.png",
                "256": "assets/icons/shark_256x256.png",
                "512": "assets/icons/shark_512x512.png",
            },
            "default-title": name,
            "default_popup": "/UI/popup.html",
        }
    };
    const path = name+"/manifest.json";
    console.log(path);
    try {
        fs.writeFileSync(path, JSON.stringify(content, null, 4), {flag: "a+"})
        //file written successfully
    } catch (err) {
        console.error(err)
    }

    //* 3. Copy assets
    const asset_status = copyAssets(name);
    console.log(asset_status)
}

module.exports = {
    createManifest,
}