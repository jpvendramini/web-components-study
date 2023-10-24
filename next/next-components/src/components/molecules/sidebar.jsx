import React from "react";
import LogoComponent from "../atoms/logo";
import TitleComponent from "../atoms/title";
import LabelComponent from "../atoms/label";

const SidebarComponent = ({ bookInfo }) => {
  const { title, subtitle, authors, description, year, pages, download } =
    bookInfo || {};

  return (
    <div className="sidebar">
      <LogoComponent selected={!!bookInfo}/>
      <TitleComponent text="Book Shelf" size="large" color="white"/>
      {bookInfo ? (
        <div
          style={{
            width: "15rem",
            height: "13rem",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            overflowY: "scroll",
          }}
        >
          <div className="bookDescription">
            <LabelComponent text="Title:" size="medium" color="white" bold/>
            <LabelComponent text={title} size="medium" color="white" />
          </div>
          <div className="bookDescription">
            <LabelComponent text="Subtitle:" size="medium" color="white" bold/>
            <LabelComponent text={subtitle} size="medium" color="white"/>
          </div>
          <div className="bookDescription">
            <LabelComponent text="Authors:" size="medium" color="white" bold/>
            <LabelComponent text={authors} size="medium" color="white"/>
          </div>
          <div className="bookDescription">
            <LabelComponent text="Description:" size="medium" color="white" bold/>
            <LabelComponent text={description} size="medium" color="white"/>
          </div>
          <div className="bookDescription">
            <LabelComponent text="Year:" size="medium" color="white" bold/>
            <LabelComponent text={year} size="medium" color="white"/>
          </div>
          <div>
            <LabelComponent text="Pages:" size="medium" color="white" bold/>
            <LabelComponent text={pages} size="medium" color="white"/>
          </div>
          <a className="button" href={download} target="_blank">
            Download
          </a>
        </div>
      ) : (
        <>
          <LabelComponent
            text="(Select a book to see its specifications here!)"
            size="small"
            color="white"
          />
        </>
      )}
    </div>
  );
};

export default SidebarComponent;
