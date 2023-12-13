import { useState } from "react";
import TopicCard from "./TopicCard";

const TopicList = () => {
    const [topics, setTopics] = useState([])


    return (
        <section className="topics">
            <h1>Topic List</h1>
            {topics.map((topic) => {
                return <TopicCard topic={topic}/>
            })}
        </section>
    )
}

export default TopicList;