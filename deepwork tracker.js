// clasp (Command Line Apps Script Projects)
// import '@google/clasp'

const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheetByName('timetable');
const DEFAULT_SERIES = SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES;

const newDay = () => {
    // where new day starts
    sheet.insertColumns(4);
    // current day
    sheet.getRange('D1').setValue(new Date()).setNumberFormat('M/D');
    // set time values to 0
    sheet.getRange('D2:D15').setValue(0);
//  sheet.getRange('D16').autoFillToNeighbor(DEFAULT_SERIES);
    const srcRange = sheet.getRange('E16:E30');
    const dstRange = sheet.getRange('D16:E30');
    srcRange.autoFill(dstRange, DEFAULT_SERIES);
    SpreadsheetApp.flush();  // ~await till success to show message!
    Browser.msgBox('Starting my new day!')
}

const onEdit = () => {
    sheet.getRange("A1").setValue(new Date()).setNumberFormat('hh:mm').setBackground(sheet.getRange('A22').getBackground());
}