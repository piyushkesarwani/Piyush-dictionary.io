import React from "react";

export const DisplayData = ({ data }) => {
  return (
    <div variant="light" className="mainContainer border w-auto h-auto p-4 m-5">
      <p>
        Meaning of{" "}
        <span className="text-dark fw-bold fs-5">{data[0].word}</span> in
        English
      </p>
      <hr />
      <div>
        <h2 className="text-primary">{data[0].word}</h2>
      </div>
      <div>
        <p>{data[0].phonetic}</p>
      </div>
      {data[0].meanings.map((item, id) => {
        return (
          <>
            <article key={id}>
              <hr />
              <p className="fw-bold fs-5 fst-italic">{item.partOfSpeech}</p>
              {item.antonyms.map((ant, id) => {
                return (
                  <p key={id}>
                    <span className="text-primary fw-normal fst-italic">
                      Antonym:{" "}
                    </span>
                    {ant}
                  </p>
                );
              })}
              {item.synonyms.map((syn, id) => {
                return (
                  <p key={id}>
                    <span className="text-primary fw-normal fst-italic">
                      Synonym:{" "}
                    </span>
                    {syn}
                  </p>
                );
              })}
              {item.definitions.map((def, id) => {
                return (
                  <>
                    <ul key={id}>
                      <li>{def.definition}</li>
                    </ul>
                    <p className="example text-secondary fw-bold fst-italic">
                      {def.example}
                    </p>
                    {def.synonyms.map((syn2, id) => {
                      return (
                        <p key={id}>
                          <span className="text-primary fw-normal fst-italic">
                            Synonym:{" "}
                          </span>
                          {syn2}
                        </p>
                      );
                    })}
                    {def.antonyms.map((ant2, id) => {
                      return (
                        <p key={id}>
                          <span className="text-primary fw-normal fst-italic">
                            Antonym:{" "}
                          </span>
                          {ant2}
                        </p>
                      );
                    })}
                  </>
                );
              })}
            </article>
          </>
        );
      })}
    </div>
  );
};
