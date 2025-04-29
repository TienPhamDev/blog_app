function formatDate(dateInput) {
    const newDateInput = dateInput.split('T')[0] // Replace hyphens with slashes
    
    const date = new Date(newDateInput);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
export default formatDate;