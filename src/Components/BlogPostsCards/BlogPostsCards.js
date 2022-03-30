import React from "react";
import "./BlogPostsCards.css";
import BlogPost from "../BlogPost/BlogPost";
import moab from "../../images/dino-reichmuth-A5rCN8626Ck-unsplash.jpg";
import surf from "../../images/gian-luca-pilia-KxQYNqp329Y-unsplash.jpg";
import jungle from "../../images/jared-rice-IgE49g4qbCk-unsplash.jpg";
import tokyo from "../../images/ryoji-iwata-n31JPLu8_Pw-unsplash.jpg";
import sailing from "../../images/artem-verbo-zHg5TXgVoGQ-unsplash.jpg";

const BlogPostsCards = () => {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <BlogPost
              src={jungle}
              text="A Journey To The Most Beautiful Jungle Paradise..."
              label="Travel"
              path="/Post"
            />
            <BlogPost
              src={surf}
              text="Travel Through Bali In Search For Undiscovered Waves..."
              label="Surf"
              path="/Post"
            />
          </ul>
          <ul className="cards__items">
            <BlogPost
              src={moab}
              text="Explore The Arches And The Beautiful Sandstones Of Utah..."
              label="Adventure"
              path="/Post"
            />

            <BlogPost
              src={tokyo}
              text="Why Travel to Japan? 20 Best Reasons to Visit it ..."
              label="Explore"
              path="/Post"
            />
            <BlogPost
              src={sailing}
              text="Finding Reasons to Get Lost Through The Open Sea.."
              label="Adrenaline"
              path="/Post"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPostsCards;

