import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import styled from 'styled-components';
import Image from 'next/image';

const Hero = styled.div`
  width: 100%;
  height: 390px;
  margin: 0 auto;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.section`
  background: rgba(255, 153, 22, 0.03);
  margin: 0 20px;
  @media (max-width: 800px) {
    margin: 0;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 30px auto;
  padding: 20px 0 40px 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const BodyWrapper = styled.div`
  padding: 0 20px;
  text-align: center;
  width: 75%;
  height: 100vh;
  overflow: scroll;
  scroll-behavior: smooth;
  margin-right: 50px;
  @media (max-width: 800px) {
    width: 100%;
    margin-right: 0;
    padding: 0 20px;
  }
`;

const Right = styled.div`
  width: 10%;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
    text-align: center;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #212121;
  }
`;

const BodyHeader = styled.h1`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  line-height: 100%;
  color: #343434;

  @media (max-width: 900px) {
    text-align: center !important;
  }

  margin: 30px 0 0px 0;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Typography = styled.p`
  font-family: DM Serif Display;
  font-style: normal;
  font-weight: normal;
  word-wrap: break-word;
  font-size: 16px;
  line-height: 170%;
  color: #000000;
  text-align: left !important;
  margin: 0 0 42px 0;
`;

const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0 0 16px 0;
  @media (max-width: 800px) {
    justify-content: center;
  }
  p {
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #0055ff;
    margin: 0;
  }
`;

const Terms = () => {
  return (
    <>
      <Hero>
        <HeroImage src="/termImg.png" />
      </Hero>
      <Wrapper>
        {/* <Nav /> */}
        <BodyHeader>Term Of Use</BodyHeader>

        <MainWrapper>
          <BodyWrapper>
            <Typography>
              The use of this Platform (Website and Services) implies that the User has read and accepted our Terms of
              Use. If you disagree with any part hereof, do not access the Platform.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>1. About Us:</strong> <br />
              HighTable Africa (“we”, “us”, or “our”) is a tech solution platform that is a tech solution platform in
              the hospitality, tourism & entertainment ecosystem that bridges the gap between customers and hospitality
              businesses through artificial intelligence and immersive technologies.
              <br />
              <br />
              We are an independent contractor for all purposes, providing this Webapp and our Services on an
              independent service provider basis. We do not have control or assume the liability or legality for the
              products or services that are paid for with our Service. We do not guarantee any User’s identity.
              <br />
              <br />
              HighTable owns a unique Application Programming Interface (API), that makes it easier for users to
              discover, visit, transact and review hospitality businesses like restaurants, hotels and clubs across
              Africa. <br />
              <br /> This Terms of Use is an Agreement between you and HighTable. It details HighTable’s obligations to
              you. It also highlights certain risks on using the Services, and you must consider such risks carefully as
              you will be bound by the provision of this Agreement through your use of this Webapp or any of our
              Services.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>2. Privacy Notice:</strong> <br />
              HighTable is committed to managing your Personal Information in line with global industry best practices.
              You can read our Privacy Notice to understand how we use your information and the steps we take to protect
              your information. <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>3. Definitions:</strong> <br />
              In this Agreement, the following words and expressions shall have the meanings assigned to them, except
              where the context otherwise requires:
              <br />
              <br />
              <strong>“Agreement”</strong> means this Terms of Use between HighTable and the Partner.
              <br />
              <br /> <strong>“Partner”</strong> means licensed organisations hotels, restaurants, cafes, bars and clubs
              & other specific use cases who signed up to HighTable;
              <br />
              <br /> <strong>“API”</strong> means Application Programming Interface; “Customers/Clients/User” means the
              customers of the Partner;
              <br />
              <br /> <strong>“Derivative Works”</strong> means any data, insights, compilation and/or any other
              Intellectual Property derived from the Customer’s data by the API through the application of data science
              and analytics processes, pursuant to and in accordance with relevant Customer’s consent;
              <br />
              <br /> <strong>“Trademark"</strong> means the trademarks registered in the name of HighTable and such
              other trademarks as are used by HighTable on or in relation to the API during the term of this Agreement.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>4. Registration:</strong> <br />
              To integrate with the API and use HighTable, the Partner shall create an account ("Account") by
              registering with HighTable and providing true, accurate, and complete information about the Partner and
              its use of the API. A Partner shall be deemed by HighTable to have honestly represented its identity based
              on any information that it may provide for its Account.
              <br />
              <br />
              To integrate with the API and use HighTable, the User shall create an account ("Account") by registering
              with HighTable and providing true, accurate, and complete information about the User and its use of the
              API. A Partner shall be deemed by HighTable to have honestly represented its identity based on any
              information that it may provide for its Account.
              <br />
              <br />
              To register, you will provide us with certain information such as your email, first name, last name,
              business name and phone number, and we may seek to verify your information through third parties, after
              which we will approve your account unless deemed risky. You give us permission to do all these.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>5. Age Restrictions:</strong> <br />
              Our Webapp and Services are not directed to children under 18. We do not knowingly transact or provide any
              services to children under 18. You are independently responsible for complying with all applicable laws
              related to your use of our Website and Services.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>6. Representations and Warranties:</strong> <br />
              You represent and warrant to HighTable that:
              <br />
              <ul>
                <li>The information supplied to HighTable is true and accurate;</li>
                <li>You have full power and authority to enter into, execute, deliver and perform this Agreement; </li>
                <li>
                  You are duly organised, authorised and in good standing under the laws of the Federal Republic of
                  Nigeria or any state, region or country of your organisation and are duly authorised to do business in
                  all other states, regions or countries in which your business operates;
                </li>
                <li>
                  You will comply with this Agreement and all applicable local, state, national, and international laws,
                  rules, and regulations;
                </li>
                <li>
                  Any information you provide to us, both when you register and in the future, is and will be true,
                  accurate, current and complete;
                </li>
                <li>You will keep all information up-to-date; and</li>
                <li>You accept and agree to these Terms.</li>
              </ul>
              <strong style={{ marginLeft: '30px' }}>7. Third-PartyVerification/Integration:</strong> <br />
              You agree and understand:
              <br />
              <ul>
                <li>
                  That HighTable shall provide certain wallet services such as airtime recharge, funds transfer, etc.
                  through third party integrators and entities;
                </li>
                <li>
                  That HighTable shall obtain your financial records during onboarding through third-party verification
                  platforms for the purpose of fulfilling Know Your Customer (KYC) requirements as stipulated by
                  regulatory authorities;
                </li>
                <li>
                  That HighTable shall make use of third party verification platforms to complete its KYC requirements
                  in any manner deemed necessary by HighTable;
                </li>
                <li>
                  That the data received by HighTable shall only be used for the purpose for which it was collected;
                </li>
                <li>
                  That the data received by HighTable for verification purposes is not stored or retained by HighTable,
                  thus in the event of a data breach, HighTable shall bear no liability to you in this regard.
                </li>
                <li>
                  By using HighTable, you agree that we may offer you access to products or services from third parties
                  (“Third Party Products''). If you decide to use or access any Third Party Products, you agree that you
                  are solely responsible for your relationship with the product provider. HighTable is not affiliated
                  with Third Party Products and does not endorse or recommend any Third Party Products. You agree that
                  the providers of the Third Party Products, and not HighTable, are solely responsible for their own
                  actions or inactions. HighTable is not liable for any damages, claims or liabilities arising out of or
                  related to any Third Party Products.
                </li>
              </ul>
              <strong style={{ marginLeft: '30px' }}>8. ChangeofInformation:</strong> <br />
              In the event that you change any information provided to us at registration including your business name,
              address, financial institution, mode of payments or the products and services that you offer, or where a
              corporate restructuring occurs, you agree to notify us within 14 days of such change. We may be unable to
              respond to you if you contact us from an address, telephone number or email account that is not registered
              with us.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>9. Account Security:</strong> <br />
              You agree not to allow anyone else to have or use your password details and to comply with all reasonable
              instructions we may issue regarding account access and security. In the event you share your password
              details, HighTable will not be liable to you for losses or damages. You will also take all reasonable
              steps to protect the security of the personal electronic device through which you access HighTable’s
              Services (including, without limitation, using PIN and/or password protected personally configured device
              functionality to access HighTable’s services and not sharing your device with other people). You are
              responsible for securely managing your password(s) for the Services and to contact HighTable if you become
              aware of any unauthorised access to your Account.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>10. Licence Grant:</strong> <br />
              HighTable hereby grants to the Partner, including to all of the Partner Users, a non-exclusive, non-
              sublicensable, non-assignable and worldwide license to access and use the API solely for the Partner’s
              internal and external business operations, according to HighTable’s terms and conditions.
              <br />
              <br />
              The Partner undertakes to pay the applicable charges, costs and expenses under this Agreement.
              <br />
              <br />
              This licence grant includes all updates, upgrades, new versions and replacement software for you to use in
              connection with our Services.
              <br />
              <br />
              The Services are protected by copyright, trademark, and other intellectual property laws of Nigeria and
              foreign countries. Nothing in this Agreement gives you a right to use the HighTable name or any of
              HighTable’s trademarks, logos, domain names, and other distinctive brand features. All rights, titles and
              interest in and to the Services are and will remain the exclusive property of HighTable and its licensors.
              <br />
              <br />
              If you do not comply with all the provisions, then you will be liable for all resulting damages suffered
              by you, HighTable and all third parties. Unless otherwise provided by applicable law, you agree:
              <br />
              <ul>
                <li>
                  not to alter, re-design, sell, trade, reproduce, adapt, display, distribute, translate, disassemble,
                  reverse engineer, or otherwise attempt to create any source code that is derived from the software;
                </li>
                <li> to provide access to or give any part of the Services to any unauthorised third party; and</li>
                <li> to make the Services available on any file-sharing or application hosting service.</li>
              </ul>
              Any feedback, comments, or suggestions you may provide to us about our Services is entirely voluntary, and
              we will be free to use such feedback, comments or suggestions as we see fit without any obligation to you.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>11. Our Fees:</strong> <br />
              Our Services are subject to a service charge based on the applicable interest rate. HighTable will always
              disclose the specific service charge and repayment option. In the event of late payment, HighTable will
              charge you a late payment fee. The fee is fixed by HighTable and it may be revised from time. Payments
              will be billed to you by HighTable in the applicable currency (plus any and all applicable taxes,
              including without limitation VAT, GST and any other statutory tax, will be added to each invoice issued at
              the current rate) as shown in the product ordering and subscription terms.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>12. Collection:</strong> <br />
              You agree to allow HighTable to send you payment reminders from time to time. You also agree that payment
              reminders may take the form of any available communication.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>13. Suspension:</strong> <br />
              HighTable reserves the right to withhold or refuse access to the API in whole or in part where it believes
              the API is being accessed or used in violation of this Agreement or any other agreement with HighTable and
              a Partner. HighTable shall notify a Partner in writing within 48 (forty-eight) hours upon suspension or
              termination of access to the API. In addition, HighTable may immediately suspend or terminate access
              without notice if HighTable deems it expedient to do so or where such continued access amounts to a
              violation of any applicable law that exposes HighTable, its infrastructure, data, business goodwill or API
              to damage or disrepute.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>14. API Deactivation:</strong> <br />
              The Partner’s Account(s) shall be deactivated from the API upon a written notice by such Partner
              requesting that its Account be deactivated. HighTable reserves the right to deactivate the Account if such
              a Partner has;
              <ul>
                <li>Ceased using the Account for 12 (twelve) months;</li>
                <li>
                  Provided false or inaccurate Know Your Customer (KYC) information or incomplete registration and
                  failed to update the registration information within five days after the Partner has been notified of
                  this; or{' '}
                </li>
                <li> Breached any obligation under this Agreement.</li>
              </ul>
              Where the Account has been deactivated, HighTable may still retain any information collected about such a
              Partner only for a period necessary to fulfil the purposes for such a period as required or permitted
              under applicable law.
              <br />
              <br />
              The Account may be re-activated upon such terms as may be mutually agreed upon by both Parties.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>15. Lawful Use:</strong> <br />
              When using the API, the Partner undertakes to abide by all applicable local, state, national, and
              international laws and regulations. The Partner assumes sole responsibility for ensuring that its use of
              the API is in compliance with all laws and regulations applicable in this regard.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>16. Prohibited Use:</strong> <br />
              The Partner agrees not to assist or otherwise enable any Third Party to:
              <ul>
                <li>
                  Access or use the API for any unlawful, infringing, threatening, abusive, obscene, harassing,
                  defamatory, deceptive, or fraudulent purpose;
                </li>
                <li>
                  Collect and store end user’s sensitive information other than as required to access or use the API, as
                  consented by the customer, as permitted by HighTable, and as permitted under applicable law;
                </li>
                <li>
                  Access or use the API or access, transmit, process Data in violation of any applicable data privacy
                  laws or in any manner that would be a breach of contract or agreement with the applicable customer;
                </li>
                <li>
                  Access or use the API to infringe any patent, trademark, trade secret, copyright, right of publicity,
                  or other right of any person or entity;
                </li>
                <li>
                  Access or use the API for any purpose other than for which it is provided by HighTable, including for
                  competitive evaluation, spying, creating a substitute or similar service to any of the API, or other
                  nefarious purposes;
                </li>
                <li>
                  Scan or test (manually or in an automated system) the vulnerability of any HighTable’s infrastructure
                  without express prior written permission from HighTable;
                </li>
                <li>
                  Breach, disable, interfere with, or otherwise circumvent any security or authentication measures or
                  any other aspect of the API;
                </li>
                <li> Overload, flood, or spam any part of the API;</li>
                <li>
                  Transfer, syndicate, resell, or otherwise distribute the API without express prior written permission
                  from HighTable;
                </li>
                <li> Modify, translate, or otherwise create derivative works of any part of the API; </li>
                <li>
                  Access or use the API or end-user Data in a manner that violates any applicable law, statute, or
                  regulation.
                </li>
              </ul>
              <strong style={{ marginLeft: '30px' }}>17. Intellectual Property:</strong> <br />
              All Intellectual Property rights of each Party (“IP Owner”) will remain the IP Owner’s property
              exclusively or that of its licensors. The other Party (“IP User”) shall not assert any claim to such
              Intellectual Property rights during the term of this Agreement, or after the termination of the Agreement,
              except as expressly provided in this Agreement.
              <br />
              <br />
              The IP User shall respect the IP Owner’s Intellectual Property rights and will not infringe on such
              rights. The IP Owner’s Intellectual Property shall not be used by the IP User for purposes not
              contemplated under this Agreement or for any purpose not expressly agreed to in writing by the IP Owner.
              <br />
              <br />
              The IP Owner may at its discretion agree to the display of its logo on the IP User’s website, payment
              forms and any other marketing materials for the purposes of promoting and providing the services as
              contemplated under this Agreement to potential customers.
              <br />
              <br />
              All intellectual property rights in or pertaining to the Trademarks and any promotional material,
              point-of-sale material, brochures, sales commercial training or other literature provided by either Party
              shall remain the property of the Party providing it, and the other Party shall acquire no rights in the
              same. Similarly, one party shall not be permitted to use the other Party’s Intellectual property for any
              reason whatsoever without the prior written consent of the other Party, whose consent shall not be
              unreasonably withheld.
              <br />
              <br />
              Ownership in Derivative Works shall vest solely in HighTable, and the Partner shall not exert any
              authority over the same. Upon the termination of this Agreement, the Partner shall destroy any such
              Derivative Works on its system and shall not use the Derivative Works for any other purpose outside the
              performance of its obligations under this Agreement;
              <br />
              <br />
              The Partner agrees not to modify any Intellectual Property or other proprietary materials which belong to
              HighTable without HighTable’s express written approval.
              <br />
              <br />
              The Partner acknowledges and agrees that any feedback, suggestions, comments, improvements, and ideas
              (collectively “Improvements”) to the API, as the Partner may provide to HighTable, may be incorporated
              into the said API and will be and remain the exclusive property of HighTable and may be used and exploited
              without limitation for any purposes which HighTable may deem fit, without obligation of any kind and
              without any obligation of confidentiality, attribution, accounting, compensation or other duty to account
              to the Partner.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>18. Disclaimer:</strong> <br />
              We try to keep HighTable available at all times, bug-free and safe; however, you use it at your own risk.
              <br />
              <br />
              Our Website and Services are provided “as is” without any express, implied and/or statutory warranties
              (including, but not limited to, any implied or statutory warranties of merchantability, fitness for a
              particular use or purpose, title, and non-infringement of intellectual property rights). Without limiting
              the generality of the foregoing, HighTable makes no warranty that our Website and Services will meet your
              requirements or that our Website will be uninterrupted, timely, secure, or error-free. No advice or
              information, whether oral or written, obtained by you through our Website or from HighTable, its parents,
              subsidiaries, or other affiliated companies, or its or their suppliers (or the respective officers,
              directors, employees, or agents of any such entities) (collectively, "HighTable parties") shall create any
              warranty.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>19. Limitation of Liability:</strong> <br />
              In no event, including but not limited to negligence, HighTable or any of its directors, officers,
              employees, agents or content or service providers (collectively, the “Protected Entities”) shall not be
              liable for any direct, indirect, special, incidental, consequential, exemplary or punitive damages arising
              from, or directly or indirectly related to, the use of, or the inability to use, the Website or API or the
              content, materials and functions related thereto, Partner’s provision of information via the Website or
              API, lost business or lost Users. In no event shall the Protected Entities be liable for:
              <ul>
                <li>
                  any content posted, transmitted, exchanged or received by or on behalf of any User or other person on
                  or through the Website or API;
                </li>
                <li>any unauthorized access to or alteration of your transmissions or data; or </li>
                <li>any other matter relating to the Website or application. </li>
              </ul>
              In no event shall the total aggregate liability of the Protected Entities to a User for all damages,
              losses, and causes of action (whether in contract or tort, including, but not limited to, negligence or
              otherwise) arising from this Terms of Use or a Partner’s use of the Website or the Services exceed the
              cost of the relevant Service.
              <br />
              <br />
              YOU AGREE TO THE LIMITATION LIABILITY CLAUSE TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW: HIGHTABLE
              WILL IN NO WAY BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL PUNITIVE, CONSEQUENTIAL, SPECIAL OR
              EXEMPLARY DAMAGES OR DAMAGES RELATING TO FAILURES OF TELECOMMUNICATIONS, THE INTERNET, ELECTRONIC
              COMMUNICATIONS, CORRUPTION, SECURITY, LOSS OR THEFT OF DATA, VIRUSES, SPYWARE, LOSS OF BUSINESS, REVENUE,
              PROFITS OR INVESTMENT, OR USE OF SOFTWARE OR HARDWARE THAT DOES NOT MEET HIGHTABLE SYSTEMS REQUIREMENTS.
              HIGHTABLE SHALL ALSO NOT BE LIABLE TO ANY DAMAGES, INCLUDING DAMAGES RESULTING FROM REVENUE LOSS, PROFIT
              LOSS, USE, DATA, GOODWILL, BUSINESS INTERRUPTION OR ANY OTHER INTANGIBLE LOSSES (WHETHER HIGHTABLE HAS
              BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR NOT) ARISING OUT OF HIGHTABLE’S WEBSITE OR SERVICES
              (INCLUDING, WITHOUT LIMITATION TO INABILITY TO USE OR ARISING FROM THE RESULT OF USE OF HIGHTABLE’S
              WEBSITE OR SERVICES) WHETHER SUCH DAMAGES ARE BASED ON WARRANTY, TORT, CONTRACT, STATUTE OR ANY OTHER
              LEGAL THEORY.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>20. Indemnity:</strong> <br />
              You agree to defend, indemnify, and hold HighTable, its officers, directors, employees, agents, licensors,
              and suppliers harmless from and against any claims, actions or demands, liabilities and settlements
              including without limitation, reasonable legal and accounting fees, resulting from, or alleged to result
              from, your violation of this Agreement.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>21. Exclusions:</strong> <br />
              Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of
              liability for certain damages. Accordingly, some of the above disclaimers and limitations of liability may
              not apply to you. To the extent that any HighTable Party may not, as a matter of applicable law, disclaim
              any implied warranty or limit its liabilities, the scope and duration of such warranty, and the extent of
              the HighTable Party's liability shall be the minimum permitted under such applicable law.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>22. Applicable Law:</strong> <br />
              These Terms of Use shall be interpreted and governed by the laws currently in force in the Federal
              Republic of Nigeria.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>23. Dispute Resolution:</strong> <br />
              All disputes arising from this Agreement shall be governed by and construed in accordance with Nigerian
              law. Any dispute arising out of or relating to this Agreement, including any question regarding its
              existence, validity, contractual obligation or termination by the Parties, shall be settled through
              amicable informal and formal discussions between the Parties.
              <br />
              <br />
              If any such dispute is not settled between the Parties within fourteen (14) business days, the Parties
              agree to submit such dispute to Mediation at the Lagos State Multi-Door Courthouse (LMDC) for resolution
              under the provisions of Lagos State Multi-Door Courthouse (LMDC) Law 2007.
              <br />
              <br />
              In the event that such dispute is not resolved amicably within 1 (one) month, such dispute shall be
              resolved by the applicable court of competent jurisdiction. Parties agree that the defaulting party would
              be liable for litigation costs accruing to the contractual disputes.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>24. Termination:</strong> <br />
              You may terminate this Agreement by closing your HighTable Account.
              <br />
              <br />
              We may suspend your HighTable Account and your access to HighTable Services and any funds or terminate
              this Agreement, if:
              <ul>
                <li>you do not comply with any of the provisions of this Agreement; </li>
                <li> we are required to do so by a Law; </li>
                <li>we are directed by a financial institution; or </li>
                <li> where a suspicious or fraudulent transaction occurs.</li>
              </ul>
              <strong style={{ marginLeft: '30px' }}>25. Severability:</strong> <br />
              If any portion of this Terms of Use is held by any court or tribunal to be invalid or unenforceable,
              either in whole or in part, then that part shall be severed from the Terms of Use and shall not affect the
              validity or enforceability of any other part in this Terms of Use.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>26. Updates, Modifications and Amendments:</strong> <br />
              We may need to update, modify or amend our Terms of Use, tools, utilities, improvements, third party
              applications, or general updates as our technology evolves. Therefore, we reserve the right to make
              changes to this Terms of Use at any time by giving notice to users on this page.
              <br />
              <br />
              We advise that you check this page often, referring to the date of the last modification on the page. If a
              User objects to any of the changes to the Terms of Use, the User must cease using our Website and/or
              Services immediately.
              <br />
              <br />
              <strong style={{ marginLeft: '30px' }}>27. Complaints:</strong> <br />
              If you have any complaints or reservations about us or any of the Services we provide, you may contact us
              via
              <br />
              <a style={{ color: 'blue' }} href="mailto:policies@hightable.africa">
                policies@hightable.africa
              </a>
            </Typography>
          </BodyWrapper>
          <Right>
            <p>Download:</p>
            <DownloadContainer>
              <BsArrowDown color="#0055FF" />
              <a href="/termsPdf.pdf" download>
                <p>.pdf</p>
              </a>
            </DownloadContainer>
          </Right>
        </MainWrapper>
      </Wrapper>
    </>
  );
};

export default Terms;
