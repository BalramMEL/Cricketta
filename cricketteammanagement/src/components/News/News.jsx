import { useEffect, useState } from "react";
import { Header } from "../Header";
// import { fetchAllNews } from "../services/NewsService";
import { Container, Row } from "react-bootstrap";

import { fetchAllNews } from "../../services/NewsService";
import NewsArticle from "./NewsArticle";

export function News(){

    const [articles,setArticles]=useState([]);

    async function fetchArticles(){
        try {
            const result=await fetchAllNews();
            setArticles(result.articles);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchArticles();
    },[]);

    return (
        <Container>
            <Header className="d-flex align-items-center justify-content-center" text="What's Happening in World"></Header>
            <Row className="mt-5">
                {
                    articles.map((article) => {
                        return (
                            <NewsArticle article={article}></NewsArticle>
                        );
                    })
                }
            </Row>
        </Container>
        
    );
}