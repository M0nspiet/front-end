import React from 'react';
import css from "./Card.module.css";
import Image from 'next/image';
import Link from 'next/link';

export const Card = ({title, img, date, autor, descriptoin }) => {
  return (
    <div className={css.card}>
      <div className={css.card__image}>
        <Image fill src={img}/>
        </div>
        <div className={css.card__content}>
          <div className={css.card__about}>
            <span>{autor}</span>
            <span>{date}</span>
          </div>
          <Link className={css.card_disc}>
            <h2>{title}</h2>
            <p>{descriptoin}</p>
          </Link>
        </div>
    </div>

  );
};