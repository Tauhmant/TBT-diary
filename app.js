// app.js

const Paper = ({ id, title, content, isActive, onClick, style }) => (
    <div
        className={`paper ${isActive ? "fullscreen" : ""}`}
        onClick={() => onClick(id)}
        style={style}
    >
        <p>{isActive ? content : title}</p>
    </div>
);

const PaperStack = () => {
    const [activePaper, setActivePaper] = React.useState(null);

    const handleClick = (id) => {
        setActivePaper((prev) => {
            const newActive = prev === id ? null : id;
            document.body.classList.toggle('blur', newActive !== null); // Toggle blur class on body
            return newActive;
        });
    };


    const papers = [
        { id: 1, title: "February 1939", content: "Dear Diary, Every night, it’s the same. I wake up screaming, my brother’s face staring back at me. I can feel the coldness of his skin, the way his body went still. But Papa is always there, sitting beside me. He doesn’t say much, but his presence calms me. I curl into him, breathing in the scent of cigarettes and paint. “I’m here, Liesel,” he whispers. And slowly, the fear fades, and I can sleep again. He never leaves me alone, not even for a moment .", position: { top: '10%', left: '10%', transform: 'rotate(-5deg)' } },
        { id: 2, title: "March 1939", content: "Papa found the book under the sheets after my nightmare. “Is this yours?” he asked, holding up The Grave Digger’s Handbook. I nodded. 'Do you want to read it?' he asked softly. Again, I nodded, though I didn’t really know how. He smiled, that soft smile of his, and said, “Well, we’d better get started then.” And so, in the dead of night, we began my first reading lesson. I stumbled over the words, but Papa was patient, and slowly, the letters began to make sense.", position: { top: '10%', left: '40%', transform: 'rotate(3deg)' } },
        { id: 3, title: "May 1939", content: "Ludwig Schmeikl was making fun of me again. I could feel the anger bubbling up, hotter and hotter. Before I knew it, my fists were flying, hitting him harder than I ever thought possible. “She’s going to kill him!” someone shouted, but I didn’t care. All the pain, all the fear of these past months was pouring out of me, and Ludwig was the target. When I finally stopped, my knuckles were bloody, and Ludwig was on the ground, groaning. But I didn’t feel sorry. Not for him .", position: { top: '10%', left: '60%', transform: 'rotate(-2deg)' } },
        { id: 4, title: "Summer 1939", content: "Rudy was always doing crazy things, but the night he painted himself black to run like Jesse Owens was the wildest. Listening to no one, he just grinned and took off down the street. His blond hair shone under the moon, and for a moment, I could almost believe he was Jesse Owens, the fastest man alive. I didn’t understand why he admired Owens so much, but I admired Rudy. He wasn’t afraid of anything.", position: { top: '60%', left: '15%', transform: 'rotate(4deg)' } },
        { id: 5, title: "Fall 1939", content: "When I stepped into the mayor’s library for the first time, it was like walking into a dream. Books lined the walls from floor to ceiling, their spines gleaming in the soft light. I ran my fingers along the shelves, feeling the smooth covers under my hand. It was magic. I almost pulled one down, but I didn’t dare disturb them. They were too perfect. The mayor’s wife just stood there, watching me, and I couldn’t help but wonder if she knew what I was feeling.", position: { top: '60%', left: '55%', transform: 'rotate(-1deg)' } },
    ];

    return (
        <div className={`paper-stack ${activePaper ? "blur" : ""}`}>
            {papers.map((paper) => (
                <Paper
                    key={paper.id}
                    id={paper.id}
                    title={paper.title}
                    content={paper.content}
                    isActive={activePaper === paper.id}
                    onClick={handleClick}
                    style={{
                        ...paper.position,
                        zIndex: activePaper === paper.id ? 10 : 1,
                        width: activePaper === paper.id ? "40vw" : "30vw",
                        height: activePaper === paper.id ? "80vh" : "25vh",
                    }}
                />
            ))}
        </div>
    );
};

const App = () => (
    <div>
        <PaperStack />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
