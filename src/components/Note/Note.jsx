import styles from './Note.module.css';
import { useState } from 'react';

const Note = () => {
	const [highlight, setHighlight] = useState(false);

	return (
		<div
			className={`${styles.note} ${highlight ? styles.highlight : ''}`}
			onClick={() => {
				setHighlight(!highlight);
			}}
		>
			<h2 className={styles.title}>Titulo</h2>
			<hr />
			<p className={styles.description}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illo
				explicabo, nisi impedit nobis ducimus officiis optio voluptate quisquam
				doloribus aliquid odio. Accusantium eius cupiditate earum minima enim,
				dolorum obcaecati hic provident non quisquam repellat dolore
				voluptatibus deleniti vero. Doloribus doloremque autem a voluptates
				sunt, vitae ipsum sit quam, optio officia porro officiis veritatis illum
				quod qui? Ex placeat, libero optio assumenda minus quod aut accusantium,
				consequatur quisquam accusamus, soluta eius earum sed laborum
				laboriosam? Ducimus vel, tempore quia aliquam libero assumenda
				laboriosam asperiores veritatis sequi tempora eaque voluptatem dolores
				reiciendis itaque. Est dolorem nostrum porro harum repudiandae quasi
				rerum, earum consequuntur? Quas voluptas asperiores dignissimos
				repudiandae maiores, deserunt ex repellat natus sint esse non sapiente,
				expedita perferendis possimus in ad nemo iure atque magni impedit
				adipisci omnis veritatis nam animi! Rerum culpa quidem qui repudiandae
				nisi odit, nam saepe vitae consectetur neque aperiam rem perferendis
				earum eaque aut architecto quasi veritatis provident corrupti? Odit,
				corrupti voluptates. Porro esse corrupti cupiditate. Amet, libero
				dolores doloremque vel, id tenetur temporibus ipsam voluptatum magni
				iusto eaque exercitationem maxime tempore. Dolores id hic dolore
				repudiandae quidem nobis earum quod culpa ut maiores? Magni ullam
				debitis ut. Praesentium, quam. Dolorem molestias repellat nostrum nulla!
			</p>
		</div>
	);
};

export default Note;
