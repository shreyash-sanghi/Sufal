const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registerdata = new Schema([], { strict: false });

const MixedSchema = new Schema({
    EventName: String,
    Eventid: String,
    DynamicFields: []
});


const saveEventReg = mongoose.model("EventsRegister",MixedSchema);  

// Function to dynamically add fields to the form schema
async function addFieldsToForm(formId, fields) {
    try {
        // Find the event form by ID
        const eventForm = await saveEventReg.findById(formId);

        // If the event form is found
        if (eventForm) {
            // Loop through the array of fields to add
            fields.forEach(field => {
                const { type, dataName } = field;
                // Dynamically add a field to the form schema
                eventForm.formFields.push( dataName);
            });

            // Save the updated event form schema
            await eventForm.save();
            console.log('Fields added to event form:', fields);
        } else {
            console.log('Event form not found');
        }
    } catch (error) {
        console.error('Error adding fields to event form:', error);
    }
}

// Function to get the appropriate Mongoose schema type based on the 'type' field
function getType(type) {
    switch (type) {
        case 'string':
            return String;
        case 'number':
            return Number;
        case 'boolean':
            return Boolean;
        // Add more cases as needed for other types
        default:
            return Schema.Types.Mixed; // Default to Mixed type if type is not recognized
    }
}

// Call the function to add fields to the event form
console.log(saveEventReg._id)
const formId = saveEventReg._id; // Example ID of the event form
const fieldsToAdd = saveEventReg.DynamicFields;
addFieldsToForm(formId, fieldsToAdd);

module.exports = saveEventReg;