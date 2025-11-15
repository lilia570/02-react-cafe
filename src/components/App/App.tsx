 import {useState} from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo'
 import type {Votes, VoteType} from '../../types/votes.ts'
import Nofitication from '../Nofitication/Nofitication';
import VoteOptions from '../VoteOptions/VoteOptions'
 import VoteStats from '../VoteStats/VoteStats'
export default function App() {
      const [votes, setVotes] = useState<Votes>({
	good: 0,
	neutral: 0,
	bad: 0
      })
    const totalVotes = votes.bad + votes.neutral + votes.good;
    const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) :0 ;
    function handleVote(type: VoteType ) {
        setVotes (prev => ({ ...prev, [type]: prev[type] + 1 }));
    }
    function resetVote() {
        setVotes({
          good: 0,
	      neutral: 0,
          bad: 0
       })
    };

    return (
        <div className={css.app}>
            <CafeInfo />
            <VoteOptions
                onVote={handleVote}
                onReset={resetVote}
                canReset={totalVotes > 0}
            />{ totalVotes > 0 ?(
                <VoteStats
                    votes={votes}
                    totalVotes={totalVotes}
                    positiveRate={positiveRate} /> ) : ( <Nofitication></Nofitication>)}
            
        </div>
         
        
    );
};