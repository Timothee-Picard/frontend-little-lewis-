"use client"
import ProjectPageDesktop from "@/components/projetPage/projetPageDesktop";
import {useEffect, useState} from "react";
import ProjectPageMobile from "@/components/projetPage/projetPageMobile";
import {fetchProjetById, Projet} from "@/api/projet";
import {useParams} from "next/navigation";

export default function ProjectsPage() {
	const [isMobile, setIsMobile] = useState(false);
	const [projet, setProjet] = useState<Projet | null>(null);
	const { slug } = useParams();

	useEffect(() => {
		const checkIfMobile = () => {
			if (window.innerWidth <= 768) {
				console.log('Vous êtes sur un appareil mobile.');
				setIsMobile(true);
			} else {
				console.log('Vous êtes sur un appareil non mobile.');
				setIsMobile(false);
			}
		};

		if (slug && slug[0]) {
			fetchProjetById(slug[0]).then((projet) => {
				setProjet(projet);
			}).catch((error) => {
				console.error('Failed to fetch project:', error);
			});
		}

		// Check on component mount
		checkIfMobile();

		// Add event listener to handle window resize
		window.addEventListener('resize', checkIfMobile);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener('resize', checkIfMobile);
		};
	}, []);

	if (!projet) {
		return <div>Chargement...</div>;
	}

	return (
		<>
			{isMobile ? <ProjectPageMobile /> : <ProjectPageDesktop projet={projet} />}
		</>
	)
}