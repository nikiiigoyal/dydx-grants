import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionSelectionCriteria() {
  return (
    <>
      <div className="w-full px-2 sm:px-4 md:px-6">
        <Accordion type="single" collapsible className="w-full mx-auto">
          <AccordionItem
            value="item-1"
            className="text-sm sm:text-base md:text-lg font-semibold"
          >
            <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 border-b border-t border-gray-700 data-[state=open]:border-b-0 hover:outline-none py-3 sm:py-4 px-2 sm:px-0">
              What is the dYdX Grants Trust?
            </AccordionTrigger>
            <AccordionContent className="pb-4 sm:pb-6 text-sm sm:text-base md:text-lg px-2 sm:px-0">
              The dYdX Grants Trust is a Guernsey Purpose Trust was established
              to provide a legal wrapper around the Grants program and
              multi-sig, allowing for the signers to act as Trustees and DYDX
              tokenholders to be beneficiaries. This has given control of the
              Grants program to DYDX tokenholders, and provided legal protection
              to Trustees.
              <br />
              <br />
              <p className="break-words">
                Trust Agreement:
                <br className="sm:hidden" />
                <a
                  href="https://drive.google.com/file/d/1HV97VtmeHSt2Fof920TzR7utuSStBFhZ/view"
                  className="text-indigo-500 break-all hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://drive.google.com/file/d/1HV97VtmeHSt2F{" "}
                </a>
              </p>
              <br />
              <p className="break-words">
                Amendment to the number of Trustees required can be found{" "}
                <a
                  href="https://drive.google.com/file/d/1p-uK6lazfr-zF1DBZFAWqhlKZSGx5g7C/view?usp=sharing"
                  className="text-indigo-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </p>
              <br />
              <p className="break-words">
                More information here:
                <br className="sm:hidden" />
                <a
                  href="https://dydx.foundation/blog/legal-framework-non-us-trusts-in-daos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 break-all hover:underline"
                >
                  https://dydx.foundation/blog/legal-framework-non-us-trusts-in-daos
                </a>
              </p>
              <br />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="text-sm sm:text-base md:text-lg font-semibold"
          >
            <AccordionTrigger className="mb-2 sm:mb-3 border-b border-gray-700 data-[state=open]:border-b-0 underline-0 text-sm sm:text-base md:text-lg font-bold py-3 sm:py-4 px-2 sm:px-0">
              Where are funds held?
            </AccordionTrigger>
            <AccordionContent className="pb-4 sm:pb-6 text-sm sm:text-base md:text-lg px-2 sm:px-0">
              Funds are held in a Gnosis safe managed by the 5 Trustees.
              <br />
              <p className="break-words mt-2">
                Link to the safe:
                <br />
                <a
                  href="https://etherscan.io/address/0xFa3811E5C923581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 break-all hover:underline"
                >
                  https://etherscan.io/address/0xFa3811E5C923581
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="text-sm sm:text-base md:text-lg font-semibold"
          >
            <AccordionTrigger className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 border-b border-gray-700 data-[state=open]:border-b-0 underline-0 py-3 sm:py-4 px-2 sm:px-0">
              When was the program launched?
            </AccordionTrigger>
            <AccordionContent className="pb-4 sm:pb-6 text-sm sm:text-base md:text-lg px-2 sm:px-0">
              The program officially launched in January 2022 after being
              approved by the community through a governance proposal.
              <br />
              <p className="break-words mt-2">
                Link to governance vote:
                <br />
                <a
                  href="https://commonwealth.im/dydx/proposal/5-dydx-grants-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 break-all hover:underline"
                >
                  https://commonwealth.im/dydx/proposal/5-dydx-grants-program
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="text-sm sm:text-base md:text-lg font-semibold"
          >
            <AccordionTrigger className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 border-b border-gray-700 data-[state=open]:border-b-0 underline-0 py-3 sm:py-4 px-2 sm:px-0">
              Who are the Trustees?
            </AccordionTrigger>
            <AccordionContent className="pb-4 sm:pb-6 text-sm sm:text-base md:text-lg px-2 sm:px-0">
              Trustees are responsible for carrying out the purpose of the
              Trust. We have the following Trustees:
              <br />
              <br />
              <div className="space-y-1">
                <div>Felix Lutsch</div>
                <div>Abra Tusz</div>
                <div>Bora Nam</div>
                <div>Colin Chan</div>
                <div>Wintermute Trading, Ltd</div>
              </div>
              <br />
              <br />
              <p className="break-words mb-2">
                The amendment to Trustees executed in Grants v1.5 can be found{" "}
                <a
                  href="https://drive.google.com/file/d/1t8Oc0ixbpKpPfRcDpIPsEC8WTaThDWBt/view"
                  className="text-indigo-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </p>
              <p className="break-words mb-2">
                The second amendment to Trustees executed in Grants v1.5 renewal
                can be found{" "}
                <a
                  href="https://drive.google.com/file/d/1c0A3VppY6EkoFjsz09dkMAh_Xo3zFWXc/view"
                  className="text-indigo-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </p>
              <p className="break-words">
                The third amendment to Trustees executed in Grants v1.5 renewal
                can be found{" "}
                <a
                  href="https://drive.google.com/file/d/1Lv9zVG8Xg8JVlRusrfHFHm0d_7bIP_Jy/view"
                  className="text-indigo-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="text-sm sm:text-base md:text-lg font-semibold"
          >
            <AccordionTrigger className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 border-b border-gray-700 data-[state=open]:border-b-0 underline-0 py-3 sm:py-4 px-2 sm:px-0">
              What and who is the Enforcer?
            </AccordionTrigger>
            <AccordionContent className="pb-4 sm:pb-6 text-sm sm:text-base md:text-lg px-2 sm:px-0">
              The Enforcer is responsible for ensuring Trustees carry out the
              purpose of the Trust and act in the best interests of the
              beneficiaries.
              <br />
              <br />
              ‍ Cliffton Lee is the Enforcer for the Trust.
              <br />
              <p className="break-words mt-2">
                The amendment to the Enforcer executed with the Grants v1.5
                extension can be found{" "}
                <a
                  href="https://drive.google.com/file/d/1Qj4ERaT0zD7BWU3n1vmZYoY2tZgAx4vj/view"
                  className="text-indigo-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here.
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
