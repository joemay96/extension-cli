const fs = require("fs")

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
 * Function to append content in a file at a specific place
 * @param {Name of the file the content should be appended to} name 
 * @param {The content that should be appendend in the file} content 
 */
function appendContent(name, content) {

}

module.exports = {
    createDirectory,
    createFile,
    appendContent,
}