
import { useState } from "react";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";

// IaC Translator FAQs
const iacFAQs = [
  {
    question: "What is Infrastructure as Code (IaC)?",
    answer: "Infrastructure as Code is the process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools."
  },
  {
    question: "What IaC formats does the translator support?",
    answer: "Our translator currently supports Terraform, AWS CloudFormation, Pulumi, Azure ARM templates, and Google Cloud Deployment Manager. More formats will be added in future updates."
  },
  {
    question: "Is this translation 100% accurate?",
    answer: "While our translator handles most common patterns, complex configurations may require manual adjustment. We recommend reviewing the translated code before deployment."
  },
  {
    question: "Can I translate between different cloud providers?",
    answer: "Yes, our translator supports cross-cloud translation between AWS, Azure, and GCP infrastructure formats, helping you migrate workloads between cloud providers."
  }
];

// Format options
const formatOptions = [
  "Terraform",
  "AWS CloudFormation",
  "Pulumi",
  "Azure ARM",
  "Google Cloud"
];

const IaCTranslator = () => {
  const [activeTab, setActiveTab] = useState<"translator" | "examples">("translator");
  const [sourceFormat, setSourceFormat] = useState(formatOptions[0]);
  const [targetFormat, setTargetFormat] = useState(formatOptions[1]);
  const [sourceCode, setSourceCode] = useState("");
  const [targetCode, setTargetCode] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState<"source" | "target" | null>(null);

  const handleTranslate = () => {
    // This would call your actual translation service
    // For demo purposes, we'll just set a placeholder text
    setTargetCode(`# Translated from ${sourceFormat} to ${targetFormat}
# This is a placeholder for the actual translated code

${targetFormat === "AWS CloudFormation" ? 
  `{
  "Resources": {
    "MyVPC": {
      "Type": "AWS::EC2::VPC",
      "Properties": {
        "CidrBlock": "10.0.0.0/16",
        "EnableDnsSupport": true,
        "EnableDnsHostnames": true,
        "Tags": [
          {
            "Key": "Name",
            "Value": "TranslatedVPC"
          }
        ]
      }
    }
  }
}` 
  : targetFormat === "Terraform" ?
  `resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true
  
  tags = {
    Name = "TranslatedVPC"
  }
}`
  : `// Sample ${targetFormat} code would appear here
// based on the source format and content`}`);
  };

  const handleFormatChange = (format: string, type: "source" | "target") => {
    if (type === "source") {
      setSourceFormat(format);
    } else {
      setTargetFormat(format);
    }
    setDropdownOpen(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold mb-8 text-center">IaC Translator</h1>
        
        <div className="max-w-6xl mx-auto bg-cloud-dark/30 backdrop-blur-md rounded-xl p-6 mb-12">
          <div className="flex mb-6 border-b border-white/10">
            <button
              className={`px-4 py-2 ${
                activeTab === "translator" 
                  ? "border-b-2 border-white font-medium" 
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveTab("translator")}
            >
              Translator
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "examples" 
                  ? "border-b-2 border-white font-medium" 
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveTab("examples")}
            >
              Examples
            </button>
          </div>
          
          {activeTab === "translator" ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Source Format */}
                <div>
                  <label className="block mb-2 text-lg">Source Format</label>
                  <div className="relative">
                    <button
                      className="w-full bg-white/10 backdrop-blur-md rounded px-4 py-2 text-left flex justify-between items-center"
                      onClick={() => setDropdownOpen(dropdownOpen === "source" ? null : "source")}
                    >
                      {sourceFormat}
                      <svg
                        className={`w-5 h-5 transform transition-transform ${dropdownOpen === "source" ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {dropdownOpen === "source" && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-cloud-dark/90 backdrop-blur-md rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                        {formatOptions.map((format) => (
                          <button
                            key={format}
                            className={`block w-full text-left px-4 py-2 hover:bg-white/10 ${format === sourceFormat ? "bg-white/10" : ""}`}
                            onClick={() => handleFormatChange(format, "source")}
                          >
                            {format}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Target Format */}
                <div>
                  <label className="block mb-2 text-lg">Target Format</label>
                  <div className="relative">
                    <button
                      className="w-full bg-white/10 backdrop-blur-md rounded px-4 py-2 text-left flex justify-between items-center"
                      onClick={() => setDropdownOpen(dropdownOpen === "target" ? null : "target")}
                    >
                      {targetFormat}
                      <svg
                        className={`w-5 h-5 transform transition-transform ${dropdownOpen === "target" ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {dropdownOpen === "target" && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-cloud-dark/90 backdrop-blur-md rounded shadow-lg z-10 max-h-60 overflow-y-auto">
                        {formatOptions.map((format) => (
                          <button
                            key={format}
                            className={`block w-full text-left px-4 py-2 hover:bg-white/10 ${format === targetFormat ? "bg-white/10" : ""}`}
                            onClick={() => handleFormatChange(format, "target")}
                          >
                            {format}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Source Code */}
                <div>
                  <label className="block mb-2 text-lg">Source Code</label>
                  <textarea
                    className="w-full h-64 bg-white/10 backdrop-blur-md rounded p-4 font-mono text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Enter your ${sourceFormat} code here...`}
                    value={sourceCode}
                    onChange={(e) => setSourceCode(e.target.value)}
                  />
                </div>
                
                {/* Target Code */}
                <div>
                  <label className="block mb-2 text-lg">Target Code</label>
                  <textarea
                    className="w-full h-64 bg-white/10 backdrop-blur-md rounded p-4 font-mono text-sm outline-none"
                    placeholder={`Translated ${targetFormat} will appear here...`}
                    value={targetCode}
                    readOnly
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleTranslate}
                  className="cloud-btn px-8 py-3"
                  disabled={!sourceCode.trim()}
                >
                  Translate
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Terraform to AWS CloudFormation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm text-white/70 mb-1">Terraform</h4>
                    <pre className="bg-black/20 p-3 rounded text-xs overflow-x-auto">
{`resource "aws_s3_bucket" "example" {
  bucket = "my-example-bucket"
  acl    = "private"
  
  tags = {
    Environment = "Dev"
    Project     = "Example"
  }
}`}
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-sm text-white/70 mb-1">AWS CloudFormation</h4>
                    <pre className="bg-black/20 p-3 rounded text-xs overflow-x-auto">
{`{
  "Resources": {
    "ExampleBucket": {
      "Type": "AWS::S3::Bucket",
      "Properties": {
        "BucketName": "my-example-bucket",
        "AccessControl": "Private",
        "Tags": [
          { "Key": "Environment", "Value": "Dev" },
          { "Key": "Project", "Value": "Example" }
        ]
      }
    }
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">AWS CloudFormation to Pulumi (Python)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm text-white/70 mb-1">AWS CloudFormation</h4>
                    <pre className="bg-black/20 p-3 rounded text-xs overflow-x-auto">
{`{
  "Resources": {
    "MyVPC": {
      "Type": "AWS::EC2::VPC",
      "Properties": {
        "CidrBlock": "10.0.0.0/16",
        "EnableDnsSupport": true
      }
    }
  }
}`}
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-sm text-white/70 mb-1">Pulumi (Python)</h4>
                    <pre className="bg-black/20 p-3 rounded text-xs overflow-x-auto">
{`import pulumi
import pulumi_aws as aws

my_vpc = aws.ec2.Vpc("myVpc",
    cidr_block="10.0.0.0/16",
    enable_dns_support=True
)

pulumi.export("vpc_id", my_vpc.id)`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <FAQ items={iacFAQs} />
        </div>
        
        <footer className="mt-16 text-center text-white/60 py-6">
          <p>© {new Date().getFullYear()} CloudMorph. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default IaCTranslator;
