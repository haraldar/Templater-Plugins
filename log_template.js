async function createLogFile(tp, folderPath) { 
    
    const BL_DELETE_ON_FILE_EXISTS = true;

	const FOLDER_LOG = folderPath;
	const FOLDER_MONTH = `${tp.date.now('YYYY-MM')}`;
	const FILE_TODAY = `${tp.date.now()}`;

	const PATH_FOLDER_MONTH = `/${FOLDER_LOG}/${FOLDER_MONTH}`;
	const PATH_FILE_TODAY = `${PATH_FOLDER_MONTH}/${FILE_TODAY}`;
 
	if (
		!tp.file.exists(`${PATH_FILE_TODAY}`)
		|| tp.file.path(true) === `${PATH_FILE_TODAY.substring(1)}.md`
	) {
	
		// Rename the file.
		await tp.file.rename(`${FILE_TODAY}`);

		// Try to create the folder if it does not exist.
		try {
			await this.app.vault.createFolder(`${PATH_FOLDER_MONTH}`);
			console.log("Folder created.")
		}
		catch (ex) {
			console.log("Folder already exists.");
		}

		// Try to move the file into the folder.
		try {
			await tp.file.move(`${PATH_FILE_TODAY}`);
			console.log("File moved.")
		}
		catch (ex) {
			console.log("Couldn't move file.");
		}
		
	}
	else {
		console.log("File exists already.");

		// Check if opted to delete the Untitled file if the 
		if (BL_DELETE_ON_FILE_EXISTS === true) {

			// If true, then get the abstract file by path and delete.
			const PATH_THIS_FILE = tp.file.path(true);
			const TFILE_THIS_FILE = app.vault.getAbstractFileByPath(PATH_THIS_FILE);

			const PATH_FILE_TODAY_MD = `${PATH_FILE_TODAY}.md`.substring(1);
			const TFILE_FILE_TODAY = app.vault.getAbstractFileByPath(PATH_FILE_TODAY_MD);
			app.workspace.activeLeaf.openFile(TFILE_FILE_TODAY);
			app.vault.trash(TFILE_THIS_FILE, true);
			console.log("Deleted file.");
			
		}

	}


	// TODO I have to check here if it is already pinned.
	leaf = app.workspace.activeLeaf;
	console.log(leaf);
	leaf.setPinned(true);
	layout = app.workspace.getLayout();
	console.log(layout);
}

module.exports = createLogFile;