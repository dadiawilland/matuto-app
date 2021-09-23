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
}