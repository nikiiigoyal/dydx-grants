import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionSelectionCriteria() {
  return (
    <>
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full mx-auto">
          <AccordionItem value="item-1" className="text-lg font-semibold">
            <AccordionTrigger className="text-lg font-semibold mb-3 border-b border-t border-gray-700 data-[state=open]:border-b-0 hover:outline-none">
              What is the dYdX Grants Trust?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              The dYdX Grants Trust is a Guernsey Purpose Trust was established
              to provide a legal wrapper around the Grants program and
              multi-sig, allowing for the signers to act as Trustees and DYDX
              tokenholders to be beneficiaries. This has given control of the
              Grants program to DYDX tokenholders, and provided legal protection
              to Trustees.
              <br />
              <br />
              <p>
                Trust Agreement:
                <a
                  href="https://drive.google.com/file/d/1HV97VtmeHSt2Fof920TzR7utuSStBFhZ/view"
                  className="text-indigo-500"
                >
                  https://drive.google.com/file/d/1HV97VtmeHSt2F{" "}
                </a>
              </p>
              <br />
              <p>
                Amendment to the number of Trustees required can be found
                <a
                  href="https://drive.google.com/file/d/1p-uK6lazfr-zF1DBZFAWqhlKZSGx5g7C/view?usp=sharing"
                  className="text-indigo-500"
                >
                  here
                </a>
              </p>
              <br />
              <p>
                More information here:
                <a
                  href="https://dydx.foundation/blog/legal-framework-non-us-trusts-in-daos "
                  target="blank"
                  className="text-indigo-500"
                >
                  https://dydx.foundation/blog/legal-framework-non-us-trusts-in-daos
                </a>
              </p>
              <br />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="mb-3 border-b border-gray-700 data-[state=open]:border-b-0 underline-0 text-lg font-bold">
              Where are funds held?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              Funds are held in a Gnosis safe managed by the 5 Trustees.
              <br />
              <p>
                Link to the safe:
                <br />
                <a
                  href="https://etherscan.io/address/0xFa3811E5C923581"
                  target="blank"
                  className="text-indigo-500"
                >
                  https://etherscan.io/address/0xFa3811E5C923581
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="text-lg font-semibold">
            <AccordionTrigger className="text-lg font-bold mb-3 border-b border-gray-700 data-[state=open]:border-b-0 underline-0">
              When was the program launched?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              The program officially launched in January 2022 after being
              approved by the community through a governance proposal.
              <br />
              <p>
                Link to governance vote:
                <br />
                <a
                  href="https://commonwealth.im/dydx/proposal/5-dydx-grants-program"
                  target="blank"
                  className="text-indigo-500"
                >
                  https://commonwealth.im/dydx/proposal/5-dydx-grants-program
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="text-lg font-semibold">
            <AccordionTrigger className="text-lg font-bold mb-3 border-b border-gray-700 data-[state=open]:border-b-0 underline-0">
              Who are the Trustees?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              Trustees are responsible for carrying out the purpose of the
              Trust. We have the following Trustees:
              <br />
              <br />
              Felix Lutsch
              <br />
              Abra Tusz
              <br />
              Bora Nam
              <br />
              Colin Chan
              <br />
              Wintermute Trading, Ltd
              <br />
              <br />
              <p>
                The amendment to Trustees executed in Grants v1.5 can be found{" "}
                <a
                  href="https://drive.google.com/file/d/1t8Oc0ixbpKpPfRcDpIPsEC8WTaThDWBt/view"
                  className="text-indigo-500"
                >
                  here
                </a>
              </p>
              <p>
                The second amendment to Trustees executed in Grants v1.5 renewal
                can be found{" "}
                <a
                  href="https://drive.google.com/file/d/1c0A3VppY6EkoFjsz09dkMAh_Xo3zFWXc/view"
                  className="text-indigo-500"
                >
                  here
                </a>
              </p>
              <p>
                The third amendment to Trustees executed in Grants v1.5 renewal
                can be found{" "}
                <a
                  href="https://drive.google.com/file/d/1Lv9zVG8Xg8JVlRusrfHFHm0d_7bIP_Jy/view"
                  className="text-indigo-500"
                >
                  here
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="text-lg font-semibold">
            <AccordionTrigger className="text-lg font-bold mb-3 border-b border-gray-700 data-[state=open]:border-b-0 underline-0">
              What and who is the Enforcer?
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-lg">
              The Enforcer is responsible for ensuring Trustees carry out the
              purpose of the Trust and act in the best interests of the
              beneficiaries.
              <br />
              <br />
              ‍ Cliffton Lee is the Enforcer for the Trust.
              <br />
              <p>
                The amendment to the Enforcer executed with the Grants v1.5
                extension can be found{" "}
                <a
                  href="https://drive.google.com/file/d/1Qj4ERaT0zD7BWU3n1vmZYoY2tZgAx4vj/view"
                  className="text-indigo-500"
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
