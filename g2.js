function doPost(e) {
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet2");
      
      // Parse form data
      var data = {};
      var params = e.parameter;
      for (var key in params) {
        data[key] = decodeURIComponent(params[key]) || "";
      }
      
      // Append data as a new row
      sheet.appendRow([
        new Date(),  // Timestamp
        data.name,
        data.email,
        data.phone,
        data.address,
        data.whatsapp,
        data.github,
        data.linkedin,
        data.subject,
        data.message
      ]);
      
      return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
      return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
    }
  }
  