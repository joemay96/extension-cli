function createManifest(name,version,description, manifestVersion,author,locale, license){
    console.log(`Name: ${name}, Version: ${version}, Desc:${description}, ManifestVersion: ${manifestVersion}, Author: ${author}, Default_locale: ${locale}, License: ${license}`)
    return 1;
}

module.exports = {
    createManifest,
}