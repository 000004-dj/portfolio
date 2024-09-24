import styles from './contact.module.css'
import React from 'react';

export const Contact = () => {
	return (
		<div className={styles.container}>
			<div className={styles.sectionTitle}>
				<h2>Contact Me</h2>
				<span>Contact Me</span>
			</div>
			<div className={styles.row}>
				{/* Левая колонка */}
				<div className={styles.column}>
					<div className={styles.contactFormWrapper}>
						<h4>Get In Touch</h4>
						<form className={styles.form}>
							<div className={styles.formField}>
								<label htmlFor="contact-form-name">Enter your name*</label>
								<input type="text" name="name" id="contact-form-name" />
							</div>
							<div className={styles.formField}>
								<label htmlFor="contact-form-email">Enter your email*</label>
								<input type="email" name="email" id="contact-form-email" />
							</div>
							<div className={styles.formField}>
								<label htmlFor="contact-form-subject">Enter your subject*</label>
								<input type="text" name="subject" id="contact-form-subject" />
							</div>
							<div className={styles.formField}>
								<label htmlFor="contact-form-message">Enter your Message*</label>
								<textarea
									name="message"
									id="contact-form-message"
								></textarea>
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
						{/* Блок телефона */}
						<div className={styles.contactInfoBlock}>
              <span className={styles.contactInfoIcon}>
                <svg
	                xmlns="http://www.w3.org/2000/svg"
	                width="24"
	                height="24"
	                viewBox="0 0 24 24"
	                fill="none"
	                stroke="currentColor"
	                strokeWidth="2"
	                strokeLinecap="round"
	                strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
							<div className={styles.contactInfoContent}>
								<h6>Phone</h6>
								<p>
									<a href="tel:+012-3456-7891">+012-3456-7891</a>
								</p>
								<p>
									<a href="tel:+012-3456-7892">+012-3456-7892</a>
								</p>
							</div>
						</div>

						{/* Блок email */}
						<div className={styles.contactInfoBlock}>
              <span className={styles.contactInfoIcon}>
                <svg
	                xmlns="http://www.w3.org/2000/svg"
	                width="24"
	                height="24"
	                viewBox="0 0 24 24"
	                fill="none"
	                stroke="currentColor"
	                strokeWidth="2"
	                strokeLinecap="round"
	                strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
							<div className={styles.contactInfoContent}>
								<h6>Email</h6>
								<p>
									<a href="mailto:admin.sitename@example.com">
										admin.sitename@example.com
									</a>
								</p>
								<p>
									<a href="mailto:info.sitename@example.com">
										info.sitename@example.com
									</a>
								</p>
							</div>
						</div>

						{/* Блок адреса */}
						<div className={styles.contactInfoBlock}>
              <span className={styles.contactInfoIcon}>
                <svg
	                xmlns="http://www.w3.org/2000/svg"
	                width="24"
	                height="24"
	                viewBox="0 0 24 24"
	                fill="none"
	                stroke="currentColor"
	                strokeWidth="2"
	                strokeLinecap="round"
	                strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
							<div className={styles.contactInfoContent}>
								<h6>Address</h6>
								<p>121 King Street, Melbourne, Victoria 3000, Australia</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

