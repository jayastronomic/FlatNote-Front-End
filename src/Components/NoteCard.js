import React from 'react';
import NoteCardButtonContainer from '../containers/NoteCardButtonContainer'


const NoteCard = (props) => {

    return(
        <div className="">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-yellow-200 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
        <div className="text-gray-900 font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base">{props.content}</p>
          </div>
          <div className="flex items-center">
            <NoteCardButtonContainer id={props.id}/>
          </div>
        </div>
      </div>
    )
}  

export default NoteCard;