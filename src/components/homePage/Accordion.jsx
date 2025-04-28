import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionFaq() {
  return (
    <>
      <div className="w-5/5 mx-auto">
        <Accordion type="single" collapsible className="mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg mb-3 border-b border-t border-gray-700 data-[state=open]:border-b-0 hover:outline-none">
              How do i apply?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              Fill out this application form. The application will only be
              shared with the Grants lead and members of the committee. The Lead
              will contact you directly if the application is successfully
              considered for a Grant.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg mb-3 border-b border-gray-700 data-[state=open]:border-b-0">
              Can i apply as a U.S. based person/company?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              Yes!
              <br />
              However, please note that the Grants team along with the
              Foundation are still working towards enabling DYDX payments to
              U.S. based grantees. As such, there will be delayed Grants
              payments to any U.S. based grantees accepted. We are doing our
              best to get this ready as soon as possible, but hope that the
              community will understand the regulatory complications and
              sensitive nature.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg mb-3 border-b border-gray-700 data-[state=open]:border-b-0">
              How will i be compensated?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              The Lead will work with you to establish possible milestones that
              could help split up the compensation so as to allow payment
              whenever a milestone is hit.
              <br />
              If no milestones can be determined, the Grant will be paid a
              portion upfront to cover costs and the remaining total once the
              grant is successfully completed. Generally, this amounts to 25%
              upfront and 75% upon completion of the final product.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg mb-3 border-b border-gray-700 data-[state=open]:border-b-0">
              What type of project will qualify for a Grant?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              Anything that will have a positive impact on the dYdX product
              and/or community! We are hoping to fund a wide range of grants
              from external trading tools to governance dashboards and
              newsletters. Grants can be simple projects, such as Translating
              documentation, or more elaborate and longer term projects, such as
              Third Party Integrations. The funding amount will vary to reflect
              the complexity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg mb-3 border-b border-gray-700 data-[state=open]:border-b-0">
              What is the application timeline? When can I expect to hear back?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              The team is working diligently to get back to applicants as
              quickly as possible. Applicants should expect to hear back within
              1 week of their initial application. Further processing time will
              depend on the review requirements and complexity of the
              application.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg mb-3 border-b border-gray-700 data-[state=open]:border-b-0">
              How can I increase my chances of getting funded?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              The program is looking to fund projects building meaningful tools
              and growth opportunities that improve the long term prospects of
              dYdX and its community. A strong history of contribution to
              open-source projects, prior history in the dYdX community, and
              examples of things you have done in the past, are all important
              signs we look for. If you are applying for a technical
              contribution, prior history of technical projects will be
              necessary to move forward.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg mb-3 border-b border-gray-700 data-[state=open]:border-b-0">
              How often do you approve new Rounds of funding?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              We are aiming to push funding rounds on a weekly cadence.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
