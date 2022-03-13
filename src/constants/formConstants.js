export const FORM_FIELDS = {
    LOGIN: [
        {
            name: 'email', type: 'text', label: 'Email Address', 
            validators: { 
                required: 'Email Address is required',
                pattern: {
                    value:  /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
                    message: 'Please enter a valid email'
                }
            }
        },
        {
            name: 'password', type: 'password', label: 'Password', 
            validators: { required: 'Password is required'}
        },
    ],
    REGISTER_NAME: [
        {  
            name: 'firstName', type: 'text', label: 'First Name', 
            validators: { required: 'First Name is required'}
        },
        {
            name: 'lastName', type: 'text', label: 'Last Name', 
            validators: { required: 'Last Name is required'}
        },
    ],
    REGISTER: [
        {
            name: 'email', type: 'text', label: 'Email Address', 
            validators: { 
                required: 'Email Address is required',
                pattern: {
                    value:  /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
                    message: 'Please enter a valid email'
                }
            }
        },
        {
            name: 'contactNumber', type: 'text', label: 'Contact Number', 
            validators: { 
                required: 'Contact Number is required',
            }
        },
        {
            name: 'password', type: 'password', label: 'Password', 
            validators: { 
                required: 'Password is required',
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
            name: 'name', type: 'text', label: 'Name on Card', 
            validators: { required: 'Name on Card is required'}
        },
        {
            name: 'number', type: 'text', label: 'Card Number', 
            validators: { required: 'Card Number is required'}
        },
        {
            subFields: [
                {  
                    name: 'cvv', type: 'password', label: 'CVV', 
                    validators: { required: 'CVV is required'}
                },
                {  
                    name: 'date_expiration', type: 'password', label: 'Expiry Date', 
                    validators: { required: 'Expiry Date is required'}
                }
            ]
        },
    ],
    JOB_POST: [
        {
            subFields: [
                {  
                    name: 'title', type: 'text', label: 'Job Title', 
                    validators: { required: 'Enter Job Title'}
                },
                {  
                    name: 'minLevel', type: 'text', label: 'Minimum Level', 
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
                    name: 'salary', type: 'text', label: 'Salary Grade', 
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
            name: 'description', type: 'text', label: 'Job Description', 
            validators: { required: 'Enter salary grade'}
        },
        {
            name: 'qualification', type: 'text', label: 'Qualification', 
            validators: { required: 'Enter qualification'}
        },
    ],
    CREATE_PARTNER: [
        {
            subFields: [
                {  
                    name: 'businessType', type: 'text', label: 'Business Type', 
                    validators: { required: 'Select Business Type'}
                },
                {  
                    name: 'contactNumber', type: 'text', label: 'Contact Number', 
                    validators: { required: 'Enter Contact Number'}
                }
            ]
        },
        {
            subFields: [
                {
                    name: 'name', type: 'text', label: 'Name', 
                    validators: { required: 'Enter name'}
                },
                {
                    name: 'emailAddress', type: 'text', label: 'Email Address', 
                    validators: { 
                        required: 'Enter Email Address',
                        pattern: {
                            value:  /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
                            message: 'Enter a valid email'
                        }
                    }
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
                    name: 'subscriptionType', type: 'text', label: 'Subscription Type', 
                    validators: { required: 'Select Subscription Type'}
                },
            ]
        },
        {
            subFields: [
                {
                    name: 'address', type: 'text', label: 'Location', 
                    validators: { required: 'Enter location'}
                },
            ]
        },
    ],
}