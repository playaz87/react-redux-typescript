import React, {useState} from 'react';

type Props = {
    addNote(note: string): void;
};

export const NewNoteInput: React.FC<Props> = ({addNote}) => {
    const [note, setNote] = useState("");
    return (
        <>
            <div>
                <input onChange={event => setNote(event.target.value)} value={note} type="text" name="note" placeholder="Note"/>
                <button onClick={() => addNote(note)}>Add Note</button>
            </div>
        </>
    );
};


