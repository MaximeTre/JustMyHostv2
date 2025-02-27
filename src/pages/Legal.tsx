import React from "react";
import { Shield, Scale, FileText, Lock } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Legal() {
  const sections = [
    { id: "company", icon: FileText, title: "Informations Légales" },
    { id: "cgu", icon: Scale, title: "Conditions Générales d'utilisation" },
    { id: "cgv", icon: Shield, title: "Conditions Générales de ventes" },
    { id: "gdpr", icon: Lock, title: "RGPD" },
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mentions Légales
          </motion.h1>

          <nav className="sticky top-20 bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg mb-8 border border-blue-900/30">
            <ul className="flex space-x-4 overflow-x-auto">
              {sections.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="whitespace-nowrap px-4 py-2 rounded-lg hover:bg-blue-600/20 transition-colors inline-block text-sm"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {sections.map(({ id, icon: Icon, title }) => (
              <motion.section
                key={id}
                id={id}
                className="mb-16 scroll-mt-32"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Icon className="w-6 h-6 text-blue-500" />
                  <h2 className="text-2xl font-bold">{title}</h2>
                </div>

                <div className="prose prose-invert prose-blue max-w-none">
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-blue-900/30">
                    {id === "company" && (
                      <>
                        <h3 className="text-lg font-semibold mt-6">
                          Présentation du site
                        </h3>
                        <p className="mt-2">
                          En vertu de l'article 6 de la loi n° 2004-575 du 21
                          juin 2004 pour la confiance dans l'économie numérique,
                          il est précisé aux utilisateurs du site justmyhost.fr
                          l'identité des différents intervenants dans le cadre
                          de sa réalisation et de son suivi :
                        </p>

                        <h4 className="text-md font-semibold mt-4">
                          Propriétaire :
                        </h4>
                        <p className="mt-2">JUSTMYHOST</p>
                        <p className="mt-2">
                          Adresse : 6 bis, Boulevard Berthelot - Montpellier
                          34000
                        </p>
                        <p className="mt-2">Contact : contact@justmyhost.fr</p>
                        <p className="mt-2">SIRET (siège): 93884172300019</p>
                        <p className="mt-2">RNA : W343032247</p>

                        <h4 className="text-md font-semibold mt-4">
                          Responsable de publication :
                        </h4>
                        <p className="mt-2">
                          Maxime .T - maxime@justmyhost.fr
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Conditions générales de ventes
                        </h3>
                        <p className="mt-2">
                          L’utilisation du site{" "}
                          <a
                            href="https://www.justmyhost.fr/"
                            className="text-blue-500 hover:underline"
                          >
                            https://www.justmyhost.fr/
                          </a>{" "}
                          implique l’acceptation pleine et entière des
                          conditions générales d’utilisation ci-après décrites.
                          Ces conditions d’utilisation sont susceptibles d’être
                          modifiées ou complétées à tout moment, les
                          utilisateurs du site{" "}
                          <a
                            href="https://www.justmyhost.fr/"
                            className="text-blue-500 hover:underline"
                          >
                            https://www.justmyhost.fr/
                          </a>{" "}
                          sont donc invités à les consulter de manière
                          régulière...
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Description des services fournis
                        </h3>
                        <p className="mt-2">
                          Le site{" "}
                          <a
                            href="https://www.justmyhost.fr/"
                            className="text-blue-500 hover:underline"
                          >
                            https://www.justmyhost.fr/
                          </a>{" "}
                          a pour objet de fournir une information concernant
                          l’ensemble des activités de la société...
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Limitations contractuelles sur les données techniques
                        </h3>
                        <p className="mt-2">
                          Le site utilise la technologie JavaScript...
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Propriété intellectuelle et contrefaçons
                        </h3>
                        <p className="mt-2">
                          JustMyHost est propriétaire des droits de propriété
                          intellectuelle ou détient les droits d’usage sur tous
                          les éléments accessibles sur le site...
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Limitations de responsabilité
                        </h3>
                        <p className="mt-2">
                          JustMyHost ne pourra être tenue responsable des
                          dommages directs et indirects causés au matériel de
                          l’utilisateur...
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Gestion des données personnelles
                        </h3>
                        <p className="mt-2">
                          En France, les données personnelles sont notamment
                          protégées par la loi n° 78-87 du 6 janvier 1978...
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Liens hypertextes et cookies
                        </h3>
                        <p className="mt-2">
                          Le site{" "}
                          <a
                            href="https://www.justmyhost.fr/"
                            className="text-blue-500 hover:underline"
                          >
                            https://www.justmyhost.fr/
                          </a>{" "}
                          contient un certain nombre de liens hypertextes vers
                          d’autres sites...
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Droit applicable et attribution de juridiction
                        </h3>
                        <p className="mt-2">
                          Tout litige en relation avec l’utilisation du site{" "}
                          <a
                            href="https://www.justmyhost.fr/"
                            className="text-blue-500 hover:underline"
                          >
                            https://www.justmyhost.fr/
                          </a>{" "}
                          est soumis au droit français...
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Les principales lois concernées
                        </h3>
                        <p className="mt-2">
                          Loi n° 78-87 du 6 janvier 1978, notamment modifiée par
                          la loi n° 2004-801 du 6 août 2004 relative à
                          l'informatique, aux fichiers et aux libertés...
                        </p>

                        <h3 className="text-lg font-semibold mt-6">Lexique</h3>
                        <p className="mt-2">
                          <span className="font-semibold">Utilisateur :</span>{" "}
                          Internaute se connectant, utilisant le site
                          susnommé...
                        </p>
                        <p className="mt-2">
                          <span className="font-semibold">
                            Informations personnelles :
                          </span>{" "}
                          « les informations qui permettent, sous quelque forme
                          que ce soit, directement ou non, l'identification des
                          personnes physiques auxquelles elles s'appliquent »
                          (article 4 de la loi n° 78-17 du 6 janvier 1978)...
                        </p>
                      </>
                    )}

                    {id === "cgu" && (
                      <>
                        <h2 className="text-lg font-semibold mt-6">
                          Conditions Générales d'Utilisation (CGU) de JustMyHost
                        </h2>
                        <p className="mt-2">
                          Date d'entrée en vigueur : 10 Avril 2024
                        </p>

                        <p className="mt-4">
                          Bienvenue sur JustMyHost. Les présentes Conditions
                          Générales d'Utilisation ("CGU") régissent
                          l'utilisation de nos services d'hébergement. En
                          utilisant nos services, vous acceptez de vous
                          conformer à ces CGU. Veuillez les lire attentivement.
                        </p>

                        <h3 className="text-md font-semibold mt-6">
                          Utilisation des services
                        </h3>
                        <p className="mt-2">
                          1.1 Vous acceptez d'utiliser nos services conformément
                          à toutes les lois applicables et aux présentes CGU.
                        </p>
                        <p className="mt-2">
                          1.2 Vous êtes responsable de la sécurité de votre
                          compte et de vos informations de connexion. Vous
                          acceptez de nous informer immédiatement en cas d'accès
                          non autorisé à votre compte.
                        </p>
                        <p className="mt-2">
                          1.3 Vous vous engagez à ne pas utiliser nos services à
                          des fins illégales, abusives, ou pour toute activité
                          qui pourrait causer des dommages à notre
                          infrastructure, à d'autres utilisateurs ou à des
                          tiers.
                        </p>

                        <h3 className="text-md font-semibold mt-6">
                          Contenu et propriété intellectuelle
                        </h3>
                        <p className="mt-2">
                          2.1 Vous conservez tous les droits de propriété
                          intellectuelle sur le contenu que vous téléchargez,
                          stockez ou publiez sur nos serveurs.
                        </p>
                        <p className="mt-2">
                          2.2 Vous nous accordez une licence non exclusive,
                          mondiale, irrévocable, transférable et
                          sous-licenciable pour utiliser, stocker, reproduire,
                          distribuer, adapter, publier et afficher publiquement
                          votre contenu dans le but de fournir nos services.
                        </p>
                        <p className="mt-2">
                          2.3 Vous acceptez de ne pas utiliser nos services pour
                          enfreindre les droits de propriété intellectuelle
                          d'autrui.
                        </p>

                        <h3 className="text-md font-semibold mt-6">
                          Sécurité et confidentialité
                        </h3>
                        <p className="mt-2">
                          3.1 Nous mettons en place des mesures de sécurité
                          raisonnables pour protéger vos données. Cependant,
                          vous comprenez que la sécurité absolue ne peut être
                          garantie sur Internet.
                        </p>
                        <p className="mt-2">
                          3.2 Notre politique de confidentialité explique
                          comment nous collectons, stockons et utilisons vos
                          données personnelles. En utilisant nos services, vous
                          acceptez cette politique de confidentialité.
                        </p>

                        <h3 className="text-md font-semibold mt-6">
                          Facturation et paiements
                        </h3>
                        <p className="mt-2">
                          4.1 Vous acceptez de payer les frais associés à
                          l'utilisation de nos services conformément à notre
                          politique de tarification en vigueur.
                        </p>
                        <p className="mt-2">
                          4.2 Les paiements sont dus à la date d'échéance
                          indiquée sur votre facture. Le non-paiement entraînera
                          la suspension de votre machine.
                        </p>

                        <h3 className="text-md font-semibold mt-6">
                          Résiliation
                        </h3>
                        <p className="mt-2">
                          5.1 Vous pouvez résilier votre compte à tout moment en
                          suivant la procédure de résiliation prévue dans votre
                          tableau de bord.
                        </p>
                        <p className="mt-2">
                          5.2 Nous nous réservons le droit de résilier ou de
                          suspendre votre compte en cas de violation des
                          présentes CGU, pour des raisons de sécurité, ou pour
                          des motifs de maintenance.
                        </p>

                        <h3 className="text-md font-semibold mt-6">
                          Modifications des CGU
                        </h3>
                        <p className="mt-2">
                          6.1 Nous nous réservons le droit de modifier ces CGU à
                          tout moment. Les modifications seront publiées sur
                          notre site web, et il vous incombe de les consulter
                          régulièrement.
                        </p>
                        <p className="mt-2">
                          6.2 Votre utilisation continue de nos services après
                          la publication de modifications constitue votre
                          acceptation des nouvelles CGU.
                        </p>

                        <h3 className="text-md font-semibold mt-6">Litiges</h3>
                        <p className="mt-2">
                          7.1 Toute réclamation ou tout litige découlant de ces
                          CGU sera régi par les CGV.
                        </p>
                      </>
                    )}

                    {id === "cgv" && (
                      <>
                        <h3 className="text-lg font-semibold mt-6">
                          Politique de Remboursement de JustMyHost
                        </h3>
                        <p className="text-sm text-gray-400">
                          Date d'entrée en vigueur : 10 Avril 2024
                        </p>
                        <p className="mt-2">
                          Bienvenue sur JustMyHost. Les Politique de
                          Remboursement ("CGV") régissent l'utilisation de nos
                          services d'hébergement. En utilisant nos services,
                          vous acceptez de vous conformer à ces CGU et CGV.
                          Veuillez les lire attentivement.
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Garantie de Remboursement
                        </h3>
                        <p className="mt-2">
                          <span className="font-semibold">
                            1.1 Demande de Remboursement :
                          </span>{" "}
                          Pour demander un remboursement, vous devez créer un
                          ticket de support via notre système de tickets sur le
                          site dans les 14 jours suivant la date de souscription
                          de votre plan d'hébergement.
                        </p>
                        <p className="mt-2">
                          <span className="font-semibold">
                            1.2 Éligibilité :
                          </span>{" "}
                          Les remboursements ne sont disponibles que pour les
                          nouveaux clients qui n'ont jamais utilisé nos services
                          auparavant. Les clients existants ne sont pas
                          éligibles à cette garantie.
                        </p>
                        <p className="mt-2">
                          <span className="font-semibold">
                            1.3 Période de Garantie :
                          </span>{" "}
                          La période de garantie de remboursement est de 14 jours
                          à compter de la date de souscription de votre plan
                          d'hébergement.
                        </p>
                        <p className="mt-2">
                          <span className="font-semibold">
                            1.4 Exclusions :
                          </span>{" "}
                          Cette garantie de remboursement ne s'applique pas aux
                          frais de domaine, aux frais de renouvellement, aux
                          frais de transfert de domaine, aux services
                          supplémentaires ou aux frais de configuration
                          personnalisée.
                        </p>
                        <p className="mt-2">
                          <span className="font-semibold">
                            1.5 Décision de Remboursement :
                          </span>{" "}
                          Nous évaluerons chaque demande de remboursement
                          individuellement. Si nous déterminons que vous êtes
                          éligible au remboursement, nous procéderons au
                          remboursement du montant total que vous avez payé pour
                          le service d'hébergement, à l'exception des exclusions
                          mentionnées ci-dessus.
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Processus de Remboursement
                        </h3>
                        <p className="mt-2">
                          <span className="font-semibold">2.1</span> Pour
                          demander un remboursement, veuillez créer un ticket de
                          support via notre système de tickets sur le site en
                          indiquant votre nom d'utilisateur, la date de
                          souscription du plan, et la raison de votre demande de
                          remboursement.
                        </p>
                        <p className="mt-2">
                          <span className="font-semibold">2.2</span> Une fois
                          que nous aurons reçu votre demande, nous la traiterons
                          dans les 3 jours ouvrables.
                        </p>
                        <p className="mt-2">
                          <span className="font-semibold">2.3</span> Si votre
                          demande de remboursement est approuvée, nous émettrons
                          le remboursement sous forme de crédit au prorata sur notre site
                          web.
                        </p>

                        <h3 className="text-lg font-semibold mt-6">
                          Exceptions
                        </h3>
                        <p className="mt-2">
                          <span className="font-semibold">3.1</span> Nous nous
                          réservons le droit de refuser une demande de
                          remboursement si nous constatons des violations de nos
                          Conditions Générales d'Utilisation ou de toute autre
                          politique de JustMyHost.
                        </p>
                        <p className="mt-2">
                          <span className="font-semibold">3.2</span> Les
                          remboursements ne seront pas accordés en cas de
                          suspension ou de résiliation de votre compte en raison
                          de violations de nos politiques.
                        </p>
                      </>
                    )}

                    {id === "gdpr" && (
                      <>
                        <h1 className="text-3xl font-bold mb-4">
                          Politique de Confidentialité de JustMyHost
                        </h1>
                        <p className="mb-4 text-sm">
                          Date de mise à jour : <strong>10 avril 2024</strong>
                        </p>

                        <section className="mb-8">
                          <h2 className="text-2xl font-semibold mb-2">
                            1. Responsable du traitement des données
                          </h2>
                          <p className="mb-2">
                            Le responsable du traitement des données
                            personnelles est :
                          </p>
                          <ul className="list-disc list-inside ml-4">
                            <li>
                              <strong>JustMyHost</strong>
                            </li>
                            <li>
                              <strong>Adresse :</strong> 6 bis, Boulevard
                              Berthelot - Montpellier 34000
                            </li>
                            <li>
                              <strong>Contact :</strong>{" "}
                              <a
                                href="mailto:contact@justmyhost.fr"
                                className="text-blue-400 hover:underline"
                              >
                                contact@justmyhost.fr
                              </a>
                            </li>
                          </ul>
                        </section>

                        <section className="mb-8">
                          <h2 className="text-2xl font-semibold mb-2">
                            2. Données collectées
                          </h2>
                          <p className="mb-2">
                            Nous collectons différentes catégories de données
                            personnelles lorsque vous utilisez nos services :
                          </p>
                          <ul className="list-disc list-inside ml-4">
                            <li>
                              <strong>Données d'identification</strong> : nom,
                              prénom, adresse, numéro de téléphone, adresse
                              email.
                            </li>
                            <li>
                              <strong>Informations de connexion</strong> : nom
                              d’utilisateur, mot de passe.
                            </li>
                            <li>
                              <strong>Données de facturation</strong> :
                              informations bancaires, historique de paiements.
                            </li>
                            <li>
                              <strong>Données techniques</strong> : adresse IP,
                              logs de connexion, informations sur les appareils
                              utilisés, type de navigateur.
                            </li>
                          </ul>
                        </section>

                        <section className="mb-8">
                          <h2 className="text-2xl font-semibold mb-2">
                            3. Finalités du traitement
                          </h2>
                          <p className="mb-2">
                            Les données personnelles sont collectées pour les
                            finalités suivantes :
                          </p>
                          <ul className="list-disc list-inside ml-4">
                            <li>
                              Fournir et gérer les services d’hébergement.
                            </li>
                            <li>Gérer la facturation et les paiements.</li>
                            <li>
                              Assurer la sécurité des services, y compris la
                              détection et la prévention des fraudes.
                            </li>
                            <li>
                              Répondre aux demandes de support et de contact.
                            </li>
                            <li>
                              Respecter les obligations légales et
                              réglementaires.
                            </li>
                          </ul>
                        </section>

                        <section className="mb-8">
                          <h2 className="text-2xl font-semibold mb-2">
                            4. Partage de vos données
                          </h2>
                          <p className="mb-2">
                            Vos données personnelles peuvent être partagées avec
                            :
                          </p>
                          <ul className="list-disc list-inside ml-4">
                            <li>
                              <strong>Fournisseurs de services tiers</strong> :
                              uniquement dans le cadre de l’hébergement et de la
                              maintenance des serveurs, de la gestion des
                              paiements et des services associés.
                            </li>
                            <li>
                              <strong>Autorités légales</strong> : lorsque cela
                              est requis par la loi ou dans le cadre de
                              procédures légales.
                            </li>
                          </ul>
                          <p>
                            Nous ne vendons jamais vos données personnelles à
                            des tiers.
                          </p>
                        </section>

                        <section className="mb-8">
                          <h2 className="text-2xl font-semibold mb-2">
                            5. Durée de conservation des données
                          </h2>
                          <p className="mb-2">
                            Vos données personnelles sont conservées aussi
                            longtemps que nécessaire pour atteindre les
                            finalités définies dans cette politique :
                          </p>
                          <ul className="list-disc list-inside ml-4">
                            <li>
                              <strong>Données de compte</strong> : conservées
                              tant que vous êtes client, puis supprimées après 3
                              ans d’inactivité.
                            </li>
                            <li>
                              <strong>Données de facturation</strong> :
                              conservées pendant 10 ans, conformément aux
                              obligations légales.
                            </li>
                            <li>
                              <strong>Logs de connexion</strong> : conservés
                              pendant une durée maximale de 12 mois.
                            </li>
                          </ul>
                        </section>

                        <section className="mb-8">
                          <h2 className="text-2xl font-semibold mb-2">
                            6. Vos droits
                          </h2>
                          <p className="mb-2">
                            Conformément au RGPD, vous avez les droits suivants
                            sur vos données personnelles :
                          </p>
                          <ul className="list-disc list-inside ml-4">
                            <li>
                              <strong>Droit d'accès</strong> : obtenir la
                              confirmation que vos données sont traitées et
                              demander une copie de celles-ci.
                            </li>
                            <li>
                              <strong>Droit de rectification</strong> : demander
                              la correction de vos données inexactes.
                            </li>
                            <li>
                              <strong>Droit à l'effacement</strong> : demander
                              la suppression de vos données personnelles sous
                              certaines conditions.
                            </li>
                            <li>
                              <strong>
                                Droit à la limitation du traitement
                              </strong>{" "}
                              : demander la limitation de l’utilisation de vos
                              données.
                            </li>
                            <li>
                              <strong>Droit à la portabilité</strong> : obtenir
                              une copie de vos données dans un format structuré,
                              couramment utilisé et lisible par machine.
                            </li>
                            <li>
                              <strong>Droit d'opposition</strong> : vous opposer
                              au traitement de vos données pour des motifs
                              légitimes.
                            </li>
                          </ul>
                          <p className="mt-2">
                            Pour exercer vos droits, vous pouvez nous contacter
                            à l'adresse suivante :{" "}
                            <a
                              href="mailto:contact@justmyhost.fr"
                              className="text-blue-400 hover:underline"
                            >
                              contact@justmyhost.fr
                            </a>
                            .
                          </p>
                        </section>

                        <section className="mb-8">
                          <h2 className="text-2xl font-semibold mb-2">
                            7. Sécurité des données
                          </h2>
                          <p>
                            Nous mettons en place des mesures techniques et
                            organisationnelles pour protéger vos données
                            personnelles contre les accès non autorisés, les
                            pertes ou les destructions. Bien que nous fassions
                            de notre mieux pour garantir la sécurité de vos
                            données, nous ne pouvons garantir une sécurité
                            absolue, étant donné les risques inhérents à
                            l'Internet.
                          </p>
                        </section>

                        <section className="mb-8">
                          <h2 className="text-2xl font-semibold mb-2">
                            8. Cookies
                          </h2>
                          <p>
                            JustMyHost utilise des cookies pour améliorer votre
                            expérience sur notre site et analyser l’utilisation
                            des services. Vous pouvez gérer vos préférences en
                            matière de cookies dans les paramètres de votre
                            navigateur.
                          </p>
                        </section>

                        <section className="mb-8">
                          <h2 className="text-2xl font-semibold mb-2">
                            9. Modifications de la politique de confidentialité
                          </h2>
                          <p>
                            Nous pouvons être amenés à modifier cette politique
                            de confidentialité. Toute mise à jour sera publiée
                            sur notre site, et nous vous encourageons à la
                            consulter régulièrement. La date de mise à jour sera
                            indiquée en haut de cette politique.
                          </p>
                        </section>

                        <section>
                          <h2 className="text-2xl font-semibold mb-2">
                            10. Contact
                          </h2>
                          <p>
                            Pour toute question ou demande concernant notre
                            politique de confidentialité, vous pouvez nous
                            contacter :
                          </p>
                          <ul className="list-disc list-inside ml-4">
                            <li>
                              <strong>Email :</strong>{" "}
                              <a
                                href="mailto:contact@justmyhost.fr"
                                className="text-blue-400 hover:underline"
                              >
                                contact@justmyhost.fr
                              </a>
                            </li>
                            <li>
                              <strong>Adresse postale :</strong> JustMyHost, 6
                              bis, Boulevard Berthelot, Montpellier 34000
                            </li>
                          </ul>
                        </section>
                      </>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
