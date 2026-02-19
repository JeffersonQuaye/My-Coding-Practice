let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
        break;
}

if (role === 'guest') {
    console.log('You are a Guest User');
} else if (role === 'moderator') {
    console.log('You are a Moderator User');
} else {
    console.log('You are an Unknown User');
}