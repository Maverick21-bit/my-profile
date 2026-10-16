const profile = {
    name: 'Ephraim Appiah',
    title: 'BSc Information Technology Student',
    tagline: 'A beginner in website development',
    photo:'/profile.jpg',
    about: 'I am a Level 200 IT student at BlueCrest College. '+
           'I am a beginner in web development, '+
           'and this is my first project in building a profile page using react in Ghana.',
    location: 'Accra, Ghana',
    email: 'eappiah2105@gmail.com',
    phone: '+233 55 222 3942',

    skills:[
        {name: 'HTML & CSS', level: 20},
        {name: 'JavaScript', level: 20},
        {name: 'Hardware Networking', level: 40},
        {name: 'Data Entry', level: 50},
        {name: 'Microsoft Suite', level: 50},
    ],
    projects:[
       {
    title: 'Personal Profile Website',
    description: 'A responsive personal portfolio website showcasing my skills, education, and projects.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/maverick21-bit/profile-site',
   },

   {
    title: 'Network Configuration Project',
    description: 'A practical networking project involving network setup, IP addressing, and connectivity testing.',
    tech: ['Cisco Packet Tracer', 'Networking'],
    link: 'https://github.com/maverick21-bit/network-configuration',
   },

   {
    title: 'Data Analysis Dashboard',
    description: 'A simple dashboard for analyzing and presenting data using charts and visualizations.',
    tech: ['Python', 'Pandas', 'Matplotlib'],
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
        url: 'https://www.linkedin.com/in/appiah-ephraim-63032a281',
    },
 ],

}

export default profile;