import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments, legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata(legalDocuments.cookies);
export default function CookiePolicyPage() { return <LegalDocumentPage document={legalDocuments.cookies} />; }
