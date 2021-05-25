"""Script to perform inference"""

"""imports"""
from transformers import BigBirdPegasusForConditionalGeneration, AutoTokenizer
import torch
import json
import sys
import os

def main(source_text):
    
    source_text = source_text.split("\n")

    try:
        model_name = 'google/bigbird-pegasus-large-bigpatent'
        torch_device = 'gpu' if torch.cuda.is_available() else 'cpu'
        tokenizer = AutoTokenizer.from_pretrained(model_name)
        model = BigBirdPegasusForConditionalGeneration.from_pretrained(model_name, attention_type="original_full").to(torch_device)
        batch =  tokenizer(source_text,
                            truncation = True,
                            padding = 'longest',
                            return_tensors = 'pt',
                            max_length=4096
                            ).to(torch_device)
        translated = model.generate(**batch)
        generated_summary = tokenizer.batch_decode(translated,
                                             skip_special_tokens = True
                                             )
        final_summary=" ".join(generated_summary)
        return final_summary
    except Exception as e:
        return str(e)
        
        
if __name__ == '__main__':
    print(main(sys.argv[1]))
    sys.stdout.flush()