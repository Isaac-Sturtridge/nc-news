import { useEffect, useState } from "react";
import TopicCard from "./TopicCard";
import { getTopics } from "../utils/axios";

const TopicList = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics
        .then((response) => {
            return response.data
        }).then((data) => {
            setTopics(data.topics)
        })
    }, [])
    return (
        <section className="topics">
            <h1>Topic List</h1>
            {topics.map((topic) => {
                return <TopicCard topic={topic} key={topic.slug}/>
            })}
        </section>
    )
}

export default TopicList;