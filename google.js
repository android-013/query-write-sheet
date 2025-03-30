function doPost(e) {
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
      var data = JSON.parse(e.postData.contents);
      
      // Append data as a new row
      sheet.appendRow([
        new Date(),  // Timestamp
        data.name,
        data.email,
        data.phone,
        data.address || "",
        data.whatsapp || "",
        data.github || "",
        data.linkedin || "",
        data.message
      ]);
      
      return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
      return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
    }
  }
  