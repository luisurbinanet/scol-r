export const imsmanifest = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<manifest xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2" identifier="[[course-identifier]]" version="1.0" xmlns:imsmd="http://www.imsglobal.org/xsd/imsmd_rootv1p2p1" xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>1.2</schemaversion>
    <imsmd:lom xmlns="http://ltsc.ieee.org/xsd/LOM">
      <imsmd:general>
        <imsmd:identifier>[[course-identifier]]</imsmd:identifier>
      </imsmd:general>
      <imsmd:lifecycle>
        <imsmd:contribute>
          <imsmd:role>
            <imsmd:source>
              <imsmd:langstring xml:lang="fr">LOMv1.0</imsmd:langstring>
            </imsmd:source>
            <imsmd:value>
              <imsmd:langstring xml:lang="fr">Author</imsmd:langstring>
            </imsmd:value>
          </imsmd:role>
          <imsmd:centity>
            <imsmd:vcard>begin:vcard
fn:[[course-author]]
end:vcard</imsmd:vcard>
          </imsmd:centity>
        </imsmd:contribute>
      </imsmd:lifecycle>
      <imsmd:educational>
        <imsmd:typicallearningtime>
          <imsmd:datetime>[[course-global-learning-time]]</imsmd:datetime>
        </imsmd:typicallearningtime>
      </imsmd:educational>
    </imsmd:lom>
  </metadata>
  <organizations default="Org1">
    <organization identifier="Org1">
      <title>[[course-title]]</title>
      <item identifier="item_[[sco-identifier]]" identifierref="resource_[[sco-identifier]]" isvisible="true">
        <title>[[sco-title]]</title>
        <adlcp:dataFromLMS>[[data-from-lms]]</adlcp:dataFromLMS>
        <metadata>
          <imsmd:lom xmlns="http://ltsc.ieee.org/xsd/LOM">
            <imsmd:general>
            <imsmd:identifier>[[sco-identifier]]</imsmd:identifier>
            </imsmd:general>
            <imsmd:lifecycle>
            <imsmd:contribute>
              <imsmd:role>
              <imsmd:source>
                <imsmd:langstring xml:lang="fr">LOMv1.0</imsmd:langstring>
              </imsmd:source>
              <imsmd:value>
                <imsmd:langstring xml:lang="fr">Author</imsmd:langstring>
              </imsmd:value>
              </imsmd:role>
              <imsmd:centity>
              <imsmd:vcard>begin:vcard
fn:[[sco-author]]
end:vcard</imsmd:vcard>
              </imsmd:centity>
            </imsmd:contribute>
            </imsmd:lifecycle>
            <imsmd:educational>
            <imsmd:typicallearningtime>
              <imsmd:datetime>[[sco-typical-learning-time]]</imsmd:datetime>
            </imsmd:typicallearningtime>
            </imsmd:educational>
          </imsmd:lom>
        </metadata>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource adlcp:scormtype="sco" type="webcontent" identifier="resource_[[sco-identifier]]" href="./[[sco-identifier]]/index.html">
      <file href="./[[sco-identifier]]/*"/>
    </resource>
  </resources>
</manifest>
`
