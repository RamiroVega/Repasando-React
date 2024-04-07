import './App.css'
import { TwitterFollowCards } from './TwitterFollowCards'

const usuarios =[{id: 1,name: 'Miguel Angel Durand',userName: 'midudev', isFollowing: true },
                 {id: 2,name: 'Ramiro Vega',userName: 'RamiroVega', isFollowing: true},
                 {id: 3,name: 'Elon Musk', userName: 'elonmusk', isFollowing: false }];

export function App () {
    //const fotmatUserName = (userName) => `@${userName}`;
    return (    

        <section className='App'>  
         {
        usuarios.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCards
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCards>
        ))
      }
         
        </section>
    )
}