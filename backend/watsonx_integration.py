from ibm_watsonx_ai import APIClient
from ibm_watsonx_ai import Credentials

def main():
  API_KEY = "API_KEY_HERE"
  region = "us-south"
  
  # Authenticate with IBM
  credentials = Credentials(
                     url = f"https://{region}.ml.cloud.ibm.com",
                     api_key = API_KEY,
                    )
  
  api_client = APIClient(credentials)

  # Show all the models you can use here
  #api_client.foundation_models.TextModels.show()
  
  model_id = 'meta-llama/llama-3-2-90b-vision-instruct'
  project_id = "PROJECT_ID_HERE"
  
  # Define parameters
  from ibm_watsonx_ai.metanames import GenTextParamsMetaNames as GenParams
  
  parameters = {
      GenParams.DECODING_METHOD: "greedy",
      GenParams.MAX_NEW_TOKENS: 100,
      GenParams.STOP_SEQUENCES: ["\n\n"]
  }
  
  # Initialize model
  from ibm_watsonx_ai.foundation_models import ModelInference
  model = ModelInference(
      model_id=model_id, 
      params=parameters, 
      credentials=credentials,
      project_id=project_id)

  # List of objects
  object_list = [
      ""
  ]
  
  # Instructions for the model
  instruction = """
  You will be given either an image or a list of items.
  
  If an image is given, idenztify the objects in the image and output the name of the objects and their price. The example output is given last. If you cannot identify an object, put in "Unidentifiable Object".
  
  If an image is not given and a list of objects are given, write down the price range of the object.
  
  EXAMPLE OUTPUT:
  Object,Price Range
  Cups,$2-$5
  Plates,$1-$5
  Pizza,$7-$10
  Unidentified Object, NaN
  """
  
  prompt = """
  Here is your list of objects: plastic cups, chair, TV screen, phone, reusable water bottle, and table. Give me the name and price range in the format of the example output above.
  """
  
  result = model.generate_text("\n".join([instruction, prompt]))

if __name__ == '__main__':
  main()
