const fs = require("fs");
const path = require("path");
const { Z_FIXED } = require("zlib");

/**
 * Function to create a new folder with the given name
 * @param {The name of the created folder} folderName 
 */
function createDirectory(folderName){
    try {
        if(!fs.existsSync(folderName)){
            fs.mkdirSync(folderName)
        }
        return 0;
    } catch(err) {
        console.log(err)
        return 1;
    }
}

/**
 * Function to create a new, currently not existing file and injecting input
 * @param {name of the created file} name 
 * @param {The contecxt to be injected into the file} content 
 */
function createFile(name, content){
    fs.open(name, "w", (err, file) => {
        if(err) console.log(`Error creating file ${name} because ${err}`);
        // file.
    });
}

/**
 * This function copies a file
 * @param {The targetfilename that gets copied} source 
 * @param {The project name, where the file gets copied into} projectName
 * @param {Target where the source gets copied to} target 
 */
function copyFileSync(source, projectName, source) {
    const targetPath = path.join(projectName, "assets", source)
    fs.copyFileSync(source, targetPath);
}

/**
 * This function calls the copyFileSync function to copy all files in the asset folder
 * @param {The name of the newly created project} projectName 
 */
function copyAssetFiles(source, projectName) {
    const files = fs.readdirSync(source);
        files.forEach( file => {
            const curFile = path.join(projectName, source, file);
            copyFileSync(curfile)
        } );
}

/**
 * Function to append content in a file at a specific place
 * @param {Name of the file the content should be appended to} name 
 * @param {The content that should be appendend in the file} content 
 */
function appendContentToFile(name, content) {

}

/**
 * This function copies the assets folder into the newly created project
 * @param {The path the new project is created in} path 
 */
function copyAssets(projectPath) {
    const folderPath = path.join(projectPath,"assets");
    const status_folder = createDirectory(folderPath);
    if(status_folder !== 0) console.error("Error creating Folder!");

    const copy_status = copyAssetFiles("./assets/icons",);
}

module.exports = {
    createDirectory,
    createFile,
    appendContentToFile,
    copyAssets
}