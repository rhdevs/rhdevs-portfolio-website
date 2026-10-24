import { Footer, Header } from "@/components/chrome";
import { ArrowRight, Label } from "@/components/primitives";

export function NotFound() {
  return (
    <>
      <Header page="other" />
      <main id="main" className="shell grid-12 min-h-[60vh] content-center gap-y-8 py-24">
        <div className="col-span-12 md:col-span-9 md:col-start-4">
          <Label>404</Label>
          <h1 className="text-h2 mt-4">This page does not exist.</h1>
          <a href="/" className="btn btn-solid mt-10">
            Back to RHDevs <ArrowRight />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
