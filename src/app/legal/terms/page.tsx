import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments, legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata(legalDocuments.terms);
export default function TermsPage() { return <LegalDocumentPage document={legalDocuments.terms} />; }
