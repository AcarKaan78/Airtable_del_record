// Initialize table and query
let table = base.getTable("softr_employees"); // Replace "Your TableName Here" with the name of your table
let query = await table.selectRecordsAsync();

// Loop through each record
for (let record of query.records) {
    // Get the status object
    let status = record.getCellValue("status");
    
    // Check if the status object exists and its name is "inactive"
    if (status && status.name === "inactive") {
        // Delete the record
        await table.deleteRecordAsync(record);
    }
}