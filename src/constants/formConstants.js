export const FORM_FIELDS = {
    LOGIN: [
        {
            name: 'username', type: 'text', label: 'Username', 
            validators: { required: 'Enter username'}
        },
        {
            name: 'password', type: 'password', label: 'Password', 
            validators: { required: 'Enter password'}
        },
    ],
    REGISTER_NAME: [
        {  
            name: 'firstName', type: 'text', label: 'First Name', 
            validators: { required: 'Enter first name'}
        },
        {
            name: 'lastName', type: 'text', label: 'Last Name', 
            validators: { required: 'Enter last name'}
        },
    ],
    REGISTER: [
        {
            name: 'email', type: 'text', label: 'Email Address', 
            validators: { 
                required: 'Enter Email Address',
                pattern: {
                    value:  /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
                    message: 'Enter a valid email'
                }
            }
        },
        {
            name: 'contactNumber', type: 'text', label: 'Contact Number', 
            validators: { 
                required: 'Enter contact number',
            }
        },
        {
            name: 'password', type: 'password', label: 'Password', 
            validators: { 
                required: 'Enter Password',
            }
        },
        {
            name: 'passwordConfirm', type: 'password', label: 'Confirm Password', 
            validators: { 
                required: 'Re enter password',
            }
        },
    ],
    PAYMENT_INFO: [
        {  
            name: 'nameOnCard', type: 'text', label: 'Name on Card', 
            validators: { required: 'Enter name on card'}
        },
        {
            name: 'cardNumber', type: 'text', label: 'Card Number', 
            validators: { required: 'Enter card details'}
        },
    ],
    JOB_POST: [
        {
            subFields: [
                {  
                    name: 'jobTitle', type: 'text', label: 'Job Title', 
                    validators: { required: 'Enter Job Title'}
                },
                {  
                    name: 'minimumLevel', type: 'text', label: 'Minimum Level', 
                    validators: { required: 'Enter minimum level'}
                }
            ]
        },
        {
            subFields: [
                {
                    name: 'jobLevel', type: 'text', label: 'Job Level', 
                    validators: { required: 'Enter Job Level'}
                },
                {
                    name: 'salaryGrade', type: 'text', label: 'Salary Grade', 
                    validators: { required: 'Enter salary grade'}
                },
            ]
        },
        {
            subFields: [
                {  
                    name: 'industry', type: 'text', label: 'Industry', 
                    validators: { required: 'Enter industry'}
                },
                {  
                    name: 'positionsAvailable', type: 'text', label: 'Positions Available', 
                    validators: { required: 'Enter available positions'}
                },
            ]
        },
        {
            subFields: [
                {
                    name: 'location', type: 'text', label: 'Location', 
                    validators: { required: 'Enter location'}
                },
                {  
                    name: 'benefits', type: 'text', label: 'Perks and Benefits', 
                    validators: { required: 'Enter perks and benefits'}
                },
            ]
        },
        {
            name: 'jobDescription', type: 'text', label: 'Job Description', 
            validators: { required: 'Enter salary grade'}
        },
        {
            name: 'qualification', type: 'text', label: 'Qualification', 
            validators: { required: 'Enter qualification'}
        },
    ],
}