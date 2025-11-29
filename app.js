const SPREADSHEET_ID = '14q2ti-BUJ0-HQMYxiWPUP3hRXYCJUcDoiMSajgiSK0I';
const API_KEY = 'AIzaSyDaOlmf99IWrZdDcMLEZPAIbrO4DrBvdZM'; 

async function fetchSheetData(spreadsheetId, apiKey) {
    const range = 'Data Template'; 
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
    
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    
    const data = await res.json();
    return data.values; 
}

export { fetchSheetData };