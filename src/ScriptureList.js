import React, { Component, useState } from 'react';
import scriptures from "./scriptures";
import ScriptureCard from "./ScriptureCard";
import InfiniteScroll from 'react-infinite-scroll-component';
import {Container, Box} from "@material-ui/core";

function ScriptureList() {
        const [count, setCount] = useState({
            prev: 0,
            next: 10
        })
        const [hasMore, setHasMore] = useState(true);
        const [current, setCurrent] = useState(scriptures.slice(count.prev, count.next))
        const getMoreData = () => {
            if (current.length === scriptures.length) {
                setHasMore(false);
                return;
            }
            setTimeout(() => {
                setCurrent(current.concat(scriptures.slice(count.prev + 10, count.next + 10)))
            }, 2000)
            setCount((prevState) => ({prev: prevState.prev + 10, next: prevState.next + 10}))
        }
        return (
            <InfiniteScroll
                dataLength={current.length} //This is important field to render the next data
                next={getMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                >
                <ul>
                    {current && current.map(s => (
                        <Box m={2}>
                            <ScriptureCard reference={s.scripture} text={s.text} topics={s.topics}></ScriptureCard>
                        </Box>
                    ))}
                </ul>
            </InfiniteScroll>
            );
} 
export default ScriptureList;