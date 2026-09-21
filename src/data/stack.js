const logo = name => `https://cdn.simpleicons.org/${name}`

export const stack = [
  { name:'React', type:'Frontend', level:'Production', logo:logo('react'), url:'https://react.dev/' },
  { name:'Vue 3', type:'Frontend', level:'Production', logo:logo('vuedotjs'), url:'https://vuejs.org/' },
  { name:'TypeScript', type:'Frontend', level:'Production', logo:logo('typescript'), url:'https://www.typescriptlang.org/' },
  { name:'JavaScript', type:'Frontend', level:'Production', logo:logo('javascript'), url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name:'Redux Toolkit', type:'Frontend', level:'State', logo:logo('redux'), url:'https://redux-toolkit.js.org/' },
  { name:'Tailwind', type:'Frontend', level:'UI', logo:logo('tailwindcss'), url:'https://tailwindcss.com/' },
  { name:'Node.js', type:'Backend', level:'Production', logo:logo('nodedotjs'), url:'https://nodejs.org/' },
  { name:'NestJS', type:'Backend', level:'Production', logo:logo('nestjs'), url:'https://nestjs.com/' },
  { name:'Express', type:'Backend', level:'Production', logo:logo('express'), url:'https://expressjs.com/' },
  { name:'Golang', type:'Backend', level:'Production', logo:logo('go'), url:'https://go.dev/' },
  { name:'PostgreSQL', type:'Backend', level:'SQL', logo:logo('postgresql'), url:'https://www.postgresql.org/' },
  { name:'MySQL / MariaDB', type:'Backend', level:'SQL', logo:logo('mysql'), url:'https://www.mysql.com/' },
  { name:'Redis', type:'Backend', level:'Cache', logo:logo('redis'), url:'https://redis.io/' },
  { name:'RabbitMQ', type:'Backend', level:'Messaging', logo:logo('rabbitmq'), url:'https://www.rabbitmq.com/' },
  { name:'Docker', type:'DevOps', level:'Infrastructure', logo:logo('docker'), url:'https://www.docker.com/' },
  { name:'Linux', type:'DevOps', level:'Servers', logo:logo('linux'), url:'https://www.linux.org/' },
  { name:'RAGE MP', type:'Game API', level:'Server-side', logo:'https://www.google.com/s2/favicons?domain=rage.mp&sz=128', url:'https://rage.mp/' }
]
