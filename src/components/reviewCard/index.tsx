import styles from "./ReviewCard.module.scss";

interface CardProps {
    title: string;
    text: string;
    image: string;
    authorName: string;
    authorImage: string;
    rating: number;
}

const ReviewCard = ({ title, text, image, authorName, authorImage, rating }: CardProps) => {
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={i < rating ? styles.starFilled : styles.starEmpty}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
                <div className={styles.cardFooter}>
                    <img src={authorImage} alt={authorName} className={styles.avatar} />
                    <span className={styles.authorName}>{authorName}</span>
                    <div className={styles.rating}>{renderStars(rating)}</div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
