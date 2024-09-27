import styles from './contact.module.css';

import { Adress, Call, Email } from '../../shared/ui/svgs';
import { Title } from '../../shared/ui/title';
import { info } from '../../myself-information';

const Contact = () => {
	const { phone1, phone2, email1, email2, address } = info.contact;

	return (
		<div className={styles.container}>

			<Title title={'Contact Me'} extraClass={styles.customTitle}/>

			<div className={styles.row}>

				{/* Левая колонка */}
				<div className={styles.column}>
					<div className={styles.contactFormWrapper}>

						<h4>Get In Touch</h4>

						<form className={styles.form}>
							<div className={styles.formField}>
								<label htmlFor="contact-form-name">Enter your name*</label>
								<input type="text" name="name" id="contact-form-name"/>
							</div>
							<div className={styles.formField}>
								<label htmlFor="contact-form-email">Enter your email*</label>
								<input type="email" name="email" id="contact-form-email"/>
							</div>
							<div className={styles.formField}>
								<label htmlFor="contact-form-subject">Enter your subject*</label>
								<input type="text" name="subject" id="contact-form-subject"/>
							</div>
							<div className={styles.formField}>
								<label htmlFor="contact-form-message">Enter your Message*</label>
								<textarea cols={30} rows={6} name="message" id="contact-form-message"></textarea>
							</div>

							<div className={styles.formField}>
								<button className={styles.button} type="submit">
									Send Mail
								</button>
							</div>
						</form>
					</div>
				</div>

				{/* Правая колонка */}
				<div className={styles.column}>
					<div className={styles.contactInfo}>

						<div className={styles.contactInfoBlock}>
							<span className={styles.contactInfoIcon}><Call/></span>
							<div className={styles.contactInfoContent}>

								<h6>Phone</h6>

								<p><a href="tel:+012-3456-7891">{phone1}</a></p>
								<p><a href="tel:+012-3456-7892">{phone2}</a></p>
							</div>
						</div>

						<div className={styles.contactInfoBlock}>
							<span className={styles.contactInfoIcon}><Email/></span>
							<div className={styles.contactInfoContent}>

								<h6>Email</h6>

								<p><a href="mailto:admin.sitename@example.com">
									{email1}</a></p>

								<p><a href="mailto:info.sitename@example.com">
									{email2}</a></p>
							</div>
						</div>

						{/* Блок адреса */}
						<div className={styles.contactInfoBlock}>
							<span className={styles.contactInfoIcon}><Adress/></span>
							<div className={styles.contactInfoContent}>
								<h6>Address</h6>
								<p>{address}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;