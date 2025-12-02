export async function fetchSheetData() {
    const res = await fetch('http://localhost:3000/sheetdata');
    if (!res.ok) throw new Error('Failed to fetch sheet data');
    const data = await res.json();
    return data.values; 
}
