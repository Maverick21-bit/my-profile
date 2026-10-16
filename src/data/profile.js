const profile = {
    name: 'Epahraim Appiah',
    title: 'BSc Information Technology Student',
    tagline: 'A beginner in website development',
    photo:'/profile.jpg',
    about: 'I am a Level 200 IT student at BlueCrest College.'+
           'I am a beginner in web development,'+
           'and this is my first project in building a profile pagein Ghana.',
    location: 'Accra, Ghana',
    email: 'eappiah2105@gmail.com',
    phone: '+233 55 222 3942',

    skills:[
        {name: 'HTML & CSS', level: 2},
        {name: 'JavaScript', level: 5},
        {name: 'Hardware Networking', level: 7},
        {name: 'Data Entry', level: 7},
        {name: 'Microsoft Suite', level: 5},
    ],
    project:[
       {
    title: 'Personal Profile Website',
    description: 'A responsive personal portfolio website showcasing my skills, education, and projects.',
    tech: 'React, JavaScript, HTML, CSS',
    link: 'https://github.com/maverick21-bit/profile-site',
   },

   {
    title: 'Network Configuration Project',
    description: 'A practical networking project involving network setup, IP addressing, and connectivity testing.',
    tech: 'Cisco Packet Tracer, Networking',
    link: 'https://github.com/maverick21-bit/network-configuration',
   },

   {
    title: 'Data Analysis Dashboard',
    description: 'A simple dashboard for analyzing and presenting data using charts and visualizations.',
    tech: 'Python, Pandas, Matplotlib',
    link: 'https://github.com/maverick21-bit/dashboard',
    },
    
],
 socials: [
    {
        label: 'Github',
        url: 'https://github.com/maverick21-bit'
    },
    {
        label: 'LinkedIn',
        url: 'www.linkedin.com/in/appiah-ephraim-63032a281',
    },
 ],

}

export default profile;